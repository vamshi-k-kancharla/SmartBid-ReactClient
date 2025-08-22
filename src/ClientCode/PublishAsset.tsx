import { StrictMode } from 'react';
import { PublishAssetPage } from '../Components/PublishAsset';

import { validateUserInputObject } from '../HelperUtils/ClientInputValidator';
import { sendHttpFileUploadRequestToSmartBidServerWithCallback } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage } from './Home';
import { processInputDataFromForm, createFormInputData } from '../HelperUtils/ProcessFormInput';
import { auctionAssetKeysForUpload, auctionAssetUIIdsForUpload, maxFilesUploadCount } from '../HelperUtils/GlobalsForClient';


export function PublishAsset() {

  return (
    
    <StrictMode>

      <PublishAssetPage />
      
    </StrictMode>

  );

}

export async function submitAuctionAssetDetails(event:any)
{

      event.preventDefault();

      let auctionAssetInputObject : {[index : string] : any} = {};

      // Process Form Input Data

      auctionAssetInputObject = processInputDataFromForm( auctionAssetInputObject,
          auctionAssetKeysForUpload,
          auctionAssetUIIdsForUpload
      );

      // Validate form input data
      
      if( !validateUserInputObject(auctionAssetInputObject, 
              auctionAssetKeysForUpload) )
      {
          alert("One or more of Auction Asset Input values are missing");
          return;
      }

      // Convert City and colony to lower Case for search filter unision

      auctionAssetInputObject.City = (auctionAssetInputObject.City).toLocaleLowerCase();
      auctionAssetInputObject.Colony = (auctionAssetInputObject.Colony).toLocaleLowerCase();

      // Create Form Data Input Object
      
      let inputFormData = createFormInputData(auctionAssetInputObject, 
          auctionAssetKeysForUpload);

      let sellerCustomerIdInput = window.localStorage.getItem( "CurrentUser_CustomerId" );

      inputFormData.append( "SellerCustomerId" , sellerCustomerIdInput! );

      // Upload files
      
      let uploadedFiles = (document.getElementById("id_files_To_Be_Uploaded") as HTMLFormElement).files;

      if( uploadedFiles.length > maxFilesUploadCount )
      {
          alert("Maximum of 10 files can be uploaded to the Server...Please re-upload");
          return;
      }

      for( let i = 0 ; i < uploadedFiles.length; i++ )
      {
          inputFormData.append("file" + i.toString(), uploadedFiles[i]);
      }

      console.log("Sending File Input based Http Request to Server : ");

      await sendHttpFileUploadRequestToSmartBidServerWithCallback( "UploadAuctionPhotos", 
          inputFormData, successResponseUploadAuctionPhotos, failureResponseUploadAuctionPhotos );
}

function successResponseUploadAuctionPhotos(httpResponseText:string)
{
  console.log("successResponseUploadAuctionPhotos : " + httpResponseText);
  alert("Successfully added asset record details to the table : " + httpResponseText);
  
  loadHomePage();
}

function failureResponseUploadAuctionPhotos(httpStatusText:string)
{
  console.log("failureResponseUploadAuctionPhotos : " + httpStatusText);
  alert("Failed to Add asset record details to the table : " + httpStatusText);

  loadHomePage();
}


