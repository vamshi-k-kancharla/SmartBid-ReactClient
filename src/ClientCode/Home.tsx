import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import { Header } from '../Components/Header';
import { BiddingStyle } from '../Components/BiddingStyle';
import { Footer } from '../Components/Footer';

import { SignUp } from './SignUp';
import { Login } from './LogIn';


let container = document.getElementById("SmartBidRoot")!;
let smartBidRoot = createRoot(container);

smartBidRoot.render(
  
  <StrictMode>

    <Header />
    <BiddingStyle />
    <br></br><br></br>
    <Footer />
    
  </StrictMode>

);


export function loadSignUpPage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <SignUp />

    </StrictMode>

  );

}

export function loadLoginPage()
{
  
  smartBidRoot.render(
    
    <StrictMode>

      <Login />
      
    </StrictMode>

  );

}

