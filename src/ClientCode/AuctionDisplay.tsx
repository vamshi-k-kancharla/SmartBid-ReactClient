import { loadHomePageAuctionDetails, loadHomePageWithoutAuctionDetails } from "./Home";

import { sendHttpRequestToSmartBidServerWithCallbackFunction } from "../HelperUtils/HttpRestAPIClient";

export function RetrieveAuctions()
{

    let retrieveAuctionsRequestUrlString = "RetrieveAuctions?Status=Open";
    
    sendHttpRequestToSmartBidServerWithCallbackFunction( retrieveAuctionsRequestUrlString, successfulAuctionDetailsResponseFunction,
        failureAuctionDetailsResponseFunction
     );

}

export function successfulAuctionDetailsResponseFunction( auctionResponseString : string)
{
    loadHomePageAuctionDetails(auctionResponseString);
}


export function failureAuctionDetailsResponseFunction( auctionResponseString : string )
{

    alert("Couldn't retrieve the details of auctioned properties => " + auctionResponseString);
    loadHomePageWithoutAuctionDetails();
}