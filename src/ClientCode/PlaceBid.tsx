import { StrictMode } from 'react';

import { sendHttpRequestToSmartBidServerWithCallbackFunction, sendHttpRequestToSmartBidServerWithCallbackFunctionObject } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage, loadPlaceBidPageWithCustomerInfo } from './Home';
import { PlaceBidPage } from '../Components/PlaceBid';


export function PlaceBid(props : any) {

  return (
    
    <StrictMode>

      <PlaceBidPage auctionDetailsResponse={props.auctionDetailsResponse} auctionIndex = {props.auctionIndex}  customerRecord = {props.customerRecord} />
      
    </StrictMode>

  );

}

export async function placeQuickBid(minBidPrice:number, assetId: number, sellerCustomerId: number)
{

    console.log("placeQuickBid To Server : minBidPrice = " + minBidPrice + " , sellerCustomerId = " + sellerCustomerId);

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

    let bidPlaceRequestUrlString = buildHttpRequestURLForBiddingData(bidDetailsObject);
    
    console.log("placeQuickBid : bidPlaceRequestUrlString = " + bidPlaceRequestUrlString);

    await sendHttpRequestToSmartBidServerWithCallbackFunction( bidPlaceRequestUrlString, 
      successResponsePlaceQuickBid, failureResponsePlaceQuickBid );

}


function buildHttpRequestURLForBiddingData(bidDetailsObject : { [index:string] : any })
{
    let bidDataUrlSuffix = "AddBid?AssetId="+bidDetailsObject.assetId+
    "&CustomerId="+bidDetailsObject.customerId+
    "&BidPrice="+bidDetailsObject.bidPrice;

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

