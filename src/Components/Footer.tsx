
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

                <div style={companyLinkCSS}><a href="#">About US</a></div>
                <div style={companyLinkCSS}><a href="#">Terms & Conditions</a></div> 
                <div style={companyLinkCSS}><a href="#">Contact US</a></div>
                <div style={companyLinkCSS}><a href="#">Rate US</a></div>
                <div style={companyLinkCSS}><a href="#">Locations</a></div>

              </div>

          </div>


          <div className='col-lg-4'>

              <div className='col-lg-4'></div>

              <div className='col-lg-5'>

                <p style={companyHeadingCSS}>Explore</p>

                <div style={companyLinkCSS}><a href="#">Find An Agent</a></div>
                <div style={companyLinkCSS}><a href="#">Find A Builder</a></div> 
                <div style={companyLinkCSS}><a href="#">Home Loans</a></div>
                <div style={companyLinkCSS}><a href="#">Plot Loans</a></div>
                <div style={companyLinkCSS}><a href="#">Agricultural Lands</a></div>

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
