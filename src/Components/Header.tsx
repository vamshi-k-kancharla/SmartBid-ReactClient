
import {navCSS, smartCSS, bidCSS, signUpCSS, loginCSS} from '../StyleSheets/HeaderStyleSheet';

export function Header() {
  
  return (

    <div>

      <nav style={navCSS} className='navbar navbar-default'>

        <div className='row'>

          <div className='col-lg-3'>
            
            <p> <span style={smartCSS}>Smart</span><span style={bidCSS}>Bid</span></p>

          </div>
        
          <div className='col-lg-6'>

              <ul className='nav row'>

                  <li className="col-lg-3"><a href="./HomePage.html">Home</a></li>
                  <li className="col-lg-3"><a href="./PublishAuction.html">Publish Auctions</a></li> 
                  <li className="col-lg-3"><a href="./ViewAuction.html">View Auctions</a></li>
                  <li className="col-lg-3"><a href="./CloseAuction.html">Close Auctions</a></li>

              </ul>

          </div>

          <div className='col-lg-3'>

            <div className='nav row'>

              <div className='col-lg-4'></div>
              <div className='col-lg-3' style={signUpCSS}><a href="./SignUp.html" style={{color: '0EA5E9'}}>Sign Up</a></div>
              <div className='col-lg-1'></div>
              <div className='col-lg-3' style={loginCSS}><a href="./Login.html" style={{color: 'white'}}>Login</a></div>

            </div>

          </div>

        </div>

      </nav>

    </div>

  );
  
}
