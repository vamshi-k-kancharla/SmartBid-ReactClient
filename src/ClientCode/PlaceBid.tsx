import { StrictMode } from 'react';

import { sendHttpRequestToSmartBidServerWithCallbackFunction } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage } from './Home';
import { PlaceBidPage } from '../Components/PlaceBid';


export function PlaceBid(props : any) {

  return (
    
    <StrictMode>

      <PlaceBidPage auctionDetailsResponse={props.auctionDetailsResponse} auctionIndex = {props.auctionIndex}/>
      
    </StrictMode>

  );

}

export async function placeQuickBid(minBidPrice:number, assetId: number)
{

    console.log("placeQuickBid To Server : minBidPrice = " + minBidPrice);

    let yourBidPrice = (document.getElementById("id_quick_bid") as HTMLFormElement).value;

    if( yourBidPrice == "" || Number(yourBidPrice) <= Number(minBidPrice) )
    {
        alert("Minimum Auction price that you can bid for is : " + minBidPrice);
        return;
    }

    let bidDetailsObject : { [index:string] : any} = {};

    bidDetailsObject["assetId"] = assetId;
    bidDetailsObject["customerId"] = 61;
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


