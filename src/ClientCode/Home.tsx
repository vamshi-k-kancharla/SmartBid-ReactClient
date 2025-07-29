import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import { Header } from '../Components/Header';
import { BiddingStyle } from '../Components/BiddingStyle';
import { Footer } from '../Components/Footer';

import { SignUp } from './SignUp';
import { PublishAsset } from './PublishAsset';
import { AuctionDisplayWidgetHomePage } from '../Components/AuctionDisplayWidget';
import { RetrieveAuctions } from './AuctionDisplay';
import { PlaceBid, retrieveCustomerRecord } from './PlaceBid';
import { RetrieveCustomerAuctionsAndBids } from './CustomerDashboard';
import { CustomerDashboardPage } from '../Components/CustomerDashboard';
import { HeaderLoggedIn } from '../Components/HeaderLoggedIn';
import { loginOnLoad } from './Login';


// Render the Home Page

let container, smartBidRoot : any;

if( container == undefined || smartBidRoot == undefined )
{
  container = document.getElementById("SmartBidRoot")!;
  smartBidRoot = createRoot(container);
}

export async function loadHomePage()
{

  RetrieveAuctions();
  
  smartBidRoot.render(
    
    <StrictMode>

      { (window.localStorage.getItem("CurrentUser_LoggedIn") == 'true') ? 
        ( <HeaderLoggedIn headerName="Home" /> ) : 
        (<Header />) }
      <BiddingStyle />
      <br></br><br></br>
      <Footer />
      
    </StrictMode>

  );
}

export async function loadHomePageAuctionDetails(auctionDetailsResponseString: string)
{

  smartBidRoot.render(
    
    <StrictMode>

      { (window.localStorage.getItem("CurrentUser_LoggedIn") == 'true') ? 
        ( <HeaderLoggedIn headerName="Home" /> ) : 
        (<Header />) }
      <AuctionDisplayWidgetHomePage auctionDetailsResponse = {auctionDetailsResponseString} />
      <BiddingStyle />
      <br></br><br></br>
      <Footer />
      
    </StrictMode>

  );
}

export async function loadHomePageWithoutAuctionDetails()
{

  smartBidRoot.render(
    
    <StrictMode>

      { (window.localStorage.getItem("CurrentUser_LoggedIn") == 'true') ? 
        ( <HeaderLoggedIn headerName="Home" /> ) : 
        (<Header />) }
      <BiddingStyle />
      <br></br><br></br>
      <Footer />
      
    </StrictMode>

  );
}

loadHomePage();

// SignUp Page

export function loadSignUpPage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <SignUp />

    </StrictMode>

  );

}

// PublishAsset Page

export function loadPublishAssetPage()
{

  loginOnLoad(loadPublishAssetPageAfterLogin);

}
  
export function loadPublishAssetPageAfterLogin( responseTextFromServer : string )
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <PublishAsset />
      
    </StrictMode>

  );

}

// Place Bid Page

export function loadPlaceBidPage(event : any, auctionDetailsResponse : string, auctionIndex : number)
{

  window.localStorage.setItem( "PlaceBid_Current_AuctionResponse", auctionDetailsResponse );
  window.localStorage.setItem( "PlaceBid_Current_AuctionIndex", String(auctionIndex) );

  loginOnLoad(loadPlaceBidPageAfterLogin);

}

export function loadPlaceBidPageAfterLogin( responseTextFromServer : string )
{

  retrieveCustomerRecord( window.localStorage.getItem("PlaceBid_Current_AuctionResponse")!, 
    Number(window.localStorage.getItem("PlaceBid_Current_AuctionIndex")) );

}

export function loadPlaceBidPageWithCustomerInfo(auctionDetailsResponse : string, auctionIndex : Number, customerRecord : string)
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <PlaceBid auctionDetailsResponse = {auctionDetailsResponse} auctionIndex = {auctionIndex} customerRecord = {customerRecord} />
      
    </StrictMode>

  );

}

// Customer Dashboard Page

export function loadCustomerDashboardPage()
{

  loginOnLoad(loadCustomerDashboardPageAfterLogin);

}

export function loadCustomerDashboardPageAfterLogin()
{

  RetrieveCustomerAuctionsAndBids();
  
}

export function loadCustomerDashboardPageWithAuctionsAndBids(auctionsAndBidsResponse : string)
{

  smartBidRoot.render(
    
    <StrictMode>

      <CustomerDashboardPage auctionsAndBidsResponse = {auctionsAndBidsResponse} />
      
    </StrictMode>

  );

}




