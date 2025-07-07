import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import { Header } from '../Components/Header';
import { BiddingStyle } from '../Components/BiddingStyle';
import { Footer } from '../Components/Footer';

import { SignUp } from './SignUp';
import { Login } from './Login';
import { PublishAsset } from './PublishAsset';


// Render the Home Page

let container, smartBidRoot : any;

if( container == undefined || smartBidRoot == undefined )
{
  container = document.getElementById("SmartBidRoot")!;
  smartBidRoot = createRoot(container);
}

export function loadHomePage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <Header />
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

// Login Page

export function loadLoginPage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <Login />
      
    </StrictMode>

  );

}

// PublishAsset Page

export function loadPublishAssetPage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <PublishAsset />
      
    </StrictMode>

  );

}

