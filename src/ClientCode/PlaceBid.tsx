import { StrictMode } from 'react';

import { sendHttpRequestToSmartBidServerWithCallbackFunction, sendHttpRequestToSmartBidServerWithCallbackFunctionObject } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage, loadPlaceBidPageWithCustomerInfo } from './Home';
import { PlaceBidPage } from '../Components/PlaceBid';
import { httpImagesRequestURLPrefix } from '../HelperUtils/GlobalsForClient';


export function PlaceBid(props : any) {

  return (
    
    <StrictMode>

      <PlaceBidPage auctionDetailsResponse={props.auctionDetailsResponse} auctionIndex = {props.auctionIndex}  customerRecord = {props.customerRecord} />
      
    </StrictMode>

  );

}

export async function placeQuickBid(minBidPrice:number, assetId: number, sellerCustomerId: number, biddingType : string)
{

    console.log("placeQuickBid To Server : minBidPrice = " + minBidPrice + " , sellerCustomerId = " + sellerCustomerId + " , biddingType = " + biddingType );

    let yourBidPrice = (document.getElementById("id_quick_bid") as HTMLFormElement).value;

    if( Number(sellerCustomerId) == Number(window.localStorage.getItem("CurrentUser_CustomerId")) )
    {
        alert("Self Bidding of Auction is restricted. Buyer should be different from the seller");
        return;
    }

    if( yourBidPrice == "" || Number(yourBidPrice) <= Number(minBidPrice) )
    {
        alert("Minimum Auction price that you can bid for is : " + minBidPrice);
        return;
    }

    let bidDetailsObject : { [index:string] : any} = {};

    bidDetailsObject["assetId"] = assetId;
    bidDetailsObject["customerId"] = window.localStorage.getItem("CurrentUser_CustomerId");
    bidDetailsObject["bidPrice"] = yourBidPrice;
    bidDetailsObject["biddingType"] = ( biddingType == null || biddingType == undefined || biddingType.toLocaleLowerCase() == 'open' ) ?
      'open' : 'secretive';

    let bidPlaceRequestUrlString = buildHttpRequestURLForBiddingData(bidDetailsObject);
    
    console.log("placeQuickBid : bidPlaceRequestUrlString = " + bidPlaceRequestUrlString);

    await sendHttpRequestToSmartBidServerWithCallbackFunction( bidPlaceRequestUrlString, 
      successResponsePlaceQuickBid, failureResponsePlaceQuickBid );

}


function buildHttpRequestURLForBiddingData(bidDetailsObject : { [index:string] : any })
{
    let bidDataUrlSuffix = "AddBid?AssetId="+bidDetailsObject.assetId+
    "&CustomerId="+bidDetailsObject.customerId+
    "&BidPrice="+bidDetailsObject.bidPrice +
    "&BiddingType="+bidDetailsObject.biddingType ;

    return bidDataUrlSuffix;
}

function successResponsePlaceQuickBid(httpResponseText:string)
{
  console.log("successResponsePlaceQuickBid : " + httpResponseText);
  alert("Successfully placed quick bid to the server : " + httpResponseText);
  
  loadHomePage();
}

function failureResponsePlaceQuickBid(httpStatusText:string)
{
  console.log("failureResponsePlaceQuickBid : " + httpStatusText);
  alert("Failed to place quick bid to the server : " + httpStatusText);

  loadHomePage();
}


export async function retrieveCustomerRecord(auctionDetailsResponse : string, auctionIndex : number)
{

    let auctionDetailsArrayObject = JSON.parse(auctionDetailsResponse);
    let sellerCustomerId = auctionDetailsArrayObject[auctionIndex].SellerCustomerId;

    let retrieveCustomerRecordUrlString = "RetrieveCustomer?CustomerId=" + sellerCustomerId;
    
    console.log("placeQuickBid : bidPlaceRequestUrlString = " + retrieveCustomerRecordUrlString);

    let auctionDetailsObject : {[index : string] : any} = {};

    auctionDetailsObject["auctionDetailsResponse"] = auctionDetailsResponse;
    auctionDetailsObject["auctionIndex"] = auctionIndex;

    await sendHttpRequestToSmartBidServerWithCallbackFunctionObject( retrieveCustomerRecordUrlString, 
      successResponseQueryCustomerRecord, failureResponseQueryCustomerRecord, "customerRecord", auctionDetailsObject );

}

function successResponseQueryCustomerRecord(auctionDetailsObject:{[index : string] : any})
{
  console.log("successResponseQueryCustomerRecord : " + auctionDetailsObject);

  if( JSON.parse(auctionDetailsObject["customerRecord"]).length == 0 )
  {

    alert("Failed to retrieve seller customer record from server : No Customer record found");
    loadHomePage();

    return;
  }

  loadPlaceBidPageWithCustomerInfo(auctionDetailsObject["auctionDetailsResponse"], auctionDetailsObject["auctionIndex"], 
    auctionDetailsObject["customerRecord"]);
}

function failureResponseQueryCustomerRecord(httpStatusText:string)
{
  console.log("failureResponseQueryCustomerRecord : " + httpStatusText);
  alert("Failed to retrieve seller customer record from server : " + httpStatusText);

  loadHomePage();
}

/**********************************************************************************************************************
 * 
 * Carousel animation Code for Images display
 * 
 * 
    { (noOfFiles > 0) ?
      
      <div className="item active" style={{borderRadius:'8px'}}>

        <img src={imageSourcePath} alt="Image 0" style={imageFileDivCSS}></img>

      </div> :<></>

    }

    { (noOfFiles > 1) ?
      
      <div className="item" style={{borderRadius:'8px'}}>

        <img src={imageSourcePath1} alt="Image 1" style={imageFileDivCSS}></img>

      </div> :<></>
      
    }
 * 
 **********************************************************************************************************************/

export function removeAllChildrenFromCarouselPane()
{

  let imageCarouselPane = document.getElementById("PlaceBid-Carousel-Images");

  while( imageCarouselPane?.hasChildNodes() )
  {
    imageCarouselPane.removeChild(imageCarouselPane.firstChild!);
  }

}

export function renderCarouselAnimationOntoPlaceBid(auctionDetailsResponse:string, auctionIndex:number)
{

  removeAllChildrenFromCarouselPane();

  let currentImagesDivElement = document.getElementById("PlaceBid-Carousel-Images");

  let auctionDetailsObject = JSON.parse(auctionDetailsResponse);
  let noOfFiles = auctionDetailsObject[auctionIndex].NoOfFiles;
  let assetId = auctionDetailsObject[auctionIndex].AssetId;

  console.log("renderCarouselAnimationOntoPlaceBid : noOfFiles = " + noOfFiles + " , assetId = " + assetId);

  for( let i = 0 ; i < noOfFiles; i++ )
  {

    // Div Element
    
    let currentDivItem = document.createElement('div');

    currentDivItem.className = "item " + ( ( i == 0 ) ? "active" : "" );
    currentDivItem.style.borderRadius = "8px";

    // Image Element
    
    let currentImageItem = document.createElement('img');
    let imageSourcePath = httpImagesRequestURLPrefix + "asset_" + assetId + "_file_" + String(i) + ".jpg";
    let altText = "Image " + String(i);

    console.log( "renderCarouselAnimationOntoPlaceBid : imageSourcePath = " + imageSourcePath );

    currentImageItem.src = imageSourcePath;
    currentImageItem.alt = altText;

    currentImageItem.style.width = '100%';
    currentImageItem.style.height = '300px';
    currentImageItem.style.borderRadius = '8px';

    currentDivItem.appendChild(currentImageItem);

    currentImagesDivElement?.appendChild(currentDivItem);

  }

}

