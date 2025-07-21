import { sendHttpRequestToSmartBidServerWithCallbackFunction } from '../HelperUtils/HttpRestAPIClient'
import { loadCustomerDashboardPage, loadCustomerDashboardPageWithAuctionsAndBids, loadHomePage } from './Home';

// Retrieve Customer Auctions and Bids

export function RetrieveCustomerAuctionsAndBids()
{

    let retrieveAuctionsRequestUrlString = "CustomerAuctionsAndBids?SellerCustomerId=59";
    
    sendHttpRequestToSmartBidServerWithCallbackFunction( retrieveAuctionsRequestUrlString, successfulBidsAndAuctionsResponseFunction,
        failureBidsAndAuctionsResponseFunction
     );

}

export function successfulBidsAndAuctionsResponseFunction( auctionsAndBidsResponseString : string)
{
    loadCustomerDashboardPageWithAuctionsAndBids(auctionsAndBidsResponseString);
}


export function failureBidsAndAuctionsResponseFunction( auctionsAndBidsResponseString : string )
{

    alert("Couldn't retrieve the details of auctions and bids => " + auctionsAndBidsResponseString);
    loadHomePage();
}


// Close the auctions 

export function closeAuction(currentBidPrice : string, assetId : Number)
{
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

