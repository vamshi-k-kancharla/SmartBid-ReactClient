import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Header } from '../Components/Header';

let container = document.getElementById("SmartBidRoot")!;
let smartBidRoot = createRoot(container);

smartBidRoot.render(
  
  <StrictMode>

    <Header />
    
  </StrictMode>

);

