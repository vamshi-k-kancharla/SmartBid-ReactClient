import { StrictMode } from 'react';

import { sendHttpRequestToSmartBidServerWithCallbackFunction } from '../HelperUtils/HttpRestAPIClient'
import { loadCustomerDashboardPageWithAuctionsAndBids, loadHomePage } from './Home';


export function RetrieveCustomerAuctionsAndBids()
{

    let retrieveAuctionsRequestUrlString = "CustomerAuctionsAndBids?SellerCustomerId=60";
    
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


