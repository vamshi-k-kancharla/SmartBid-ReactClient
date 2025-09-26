import { sendHttpRequestToSmartBidServerWithCallbackFunction, sendHttpRequestToSmartBidServerWithCallbackFunctionObject } from '../HelperUtils/HttpRestAPIClient';
import { loadCustomerDashboardPage, loadCustomerDashboardPageWithAuctionsAndBids, loadHomePage } from './Home';

// Retrieve Customer Auctions and Bids

export function RetrieveCustomerAuctionsAndBids()
{

    let retrieveAuctionsRequestUrlString = "CustomerAuctionsAndBids?SellerCustomerId=" + window.localStorage.getItem("CurrentUser_CustomerId");
    
    sendHttpRequestToSmartBidServerWithCallbackFunction( retrieveAuctionsRequestUrlString, successfulBidsAndAuctionsResponseFunction,
        failureBidsAndAuctionsResponseFunction
     );

}

export function successfulBidsAndAuctionsResponseFunction( auctionsAndBidsResponseString : string)
{

    let auctionsAndBidsResponseObject : {[index : string] : any} = {};

    auctionsAndBidsResponseObject["auctionsAndBidsResponse"] = auctionsAndBidsResponseString;

    RetrieveAssetAuctionResponse(auctionsAndBidsResponseObject);
}


export function failureBidsAndAuctionsResponseFunction( auctionsAndBidsResponseString : string )
{

    alert("Couldn't retrieve the details of auctions and bids => " + auctionsAndBidsResponseString);
    loadHomePage();
}


export function RetrieveAssetAuctionResponse(auctionsAndBidsResponseObject : {[index : string] : any})
{

    let retrieveAuctionsRequestUrlString = "RetrieveAuctions";
    
    sendHttpRequestToSmartBidServerWithCallbackFunctionObject( retrieveAuctionsRequestUrlString, successfulAuctionsResponseFunction,
        failureAuctionsResponseFunction, "auctionsResponse", auctionsAndBidsResponseObject
     );

}

export function successfulAuctionsResponseFunction( auctionsAndBidsResponseObject : {[index : string] : any} )
{
    loadCustomerDashboardPageWithAuctionsAndBids(auctionsAndBidsResponseObject["auctionsAndBidsResponse"], 
        auctionsAndBidsResponseObject["auctionsResponse"]
    );
}


export function failureAuctionsResponseFunction( auctionsAndBidsResponseObject : {[index : string] : any} )
{

    alert("Couldn't retrieve the details of all the auctions => ");
    loadHomePage();
}


// Close the auctions 

export function closeAuction(currentBidPrice : string, assetId : number, assetDetailsResponse : { [index : string] : any }, 
    auctionIndex : number)
{

    if( assetDetailsResponse[auctionIndex].BidderCustomerId == null || assetDetailsResponse[auctionIndex].BidderCustomerId == undefined ||
        assetDetailsResponse[auctionIndex].CurrentBidPrice == assetDetailsResponse[auctionIndex].MinAuctionPrice )
    {

        alert("There hasn't been any bid so far on this auction...Auction can't be closed");
        return;
        
    }

    alert("Buyer & Seller have agreed to close the Auction for the price => " + currentBidPrice);

    let closeAuctionUrlSuffix = "CloseAuction?AssetId="+assetId;
    
    console.log("closeAuctionUrlSuffix = " + closeAuctionUrlSuffix);

    sendHttpRequestToSmartBidServerWithCallbackFunction(closeAuctionUrlSuffix, successBidResponseCallbackFunction, 
        failureBidResponseCallbackFunction
    );
}

function successBidResponseCallbackFunction()
{
    alert("Auction is successfully closed");
    loadCustomerDashboardPage();
}

function failureBidResponseCallbackFunction()
{
    alert("Auction closure failed...Please follow up");
    loadCustomerDashboardPage();
}

