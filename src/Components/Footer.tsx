
import {navCSS,smartCSS, bidCSS, footerSubHeadingCSS, footerSubHeading2CSS, companyHeadingCSS, companyLinkCSS, reserveRightsCSS} from '../StyleSheets/FooterStyleSheet';

export function Footer() {
  
  return (

    <div>

      <nav style={navCSS}>

        <div className='row'>

          <div className='col-lg-4'>
            
            <p> <span style={smartCSS}>Smart</span><span style={bidCSS}>Bid</span></p>

            <div style={footerSubHeadingCSS}>Where Real Estate Meets Real Opportunity.</div>

            <div style={footerSubHeading2CSS}>Empowering buyer, sellers, agents and builders with a smarter way to connect, list and close property deals through open & secretive bidding.</div>

          </div>

        
          <div className='col-lg-4'>

              <div className='col-lg-5'></div>

              <div className='col-lg-6'>

                <p style={companyHeadingCSS}>Company</p>

                <div style={companyLinkCSS}><a href="./HomePage.html">About US</a></div>
                <div style={companyLinkCSS}><a href="./PublishAuction.html">Terms & Conditions</a></div> 
                <div style={companyLinkCSS}><a href="./ViewAuction.html">Contact US</a></div>
                <div style={companyLinkCSS}><a href="./CloseAuction.html">Rate US</a></div>
                <div style={companyLinkCSS}><a href="./CloseAuction.html">Locations</a></div>

              </div>

          </div>


          <div className='col-lg-4'>

              <div className='col-lg-4'></div>

              <div className='col-lg-5'>

                <p style={companyHeadingCSS}>Explore</p>

                <div style={companyLinkCSS}><a href="./HomePage.html">Find An Agent</a></div>
                <div style={companyLinkCSS}><a href="./PublishAuction.html">Find A Builder</a></div> 
                <div style={companyLinkCSS}><a href="./ViewAuction.html">Home Loans</a></div>
                <div style={companyLinkCSS}><a href="./CloseAuction.html">Plot Loans</a></div>
                <div style={companyLinkCSS}><a href="./CloseAuction.html">Agricultural Lands</a></div>

              </div>

          </div>

        </div>

        <div className='row' style={{paddingTop: '40px'}}>

          <div className='col-lg-5'></div>

          <div style={reserveRightsCSS}>©2025 SmartBid. All rights reserved.</div>
  
        </div>

      </nav>

    </div>

  );
  
}
