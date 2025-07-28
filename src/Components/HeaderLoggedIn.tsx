
import {navCSS, smartCSS, bidCSS, headerNameLoggedInCSS, logoutCSS} from '../StyleSheets/HeaderStyleSheet';
import { loadCustomerDashboardPage, loadHomePage, loadPublishAssetPage } from '../ClientCode/Home';
import { logoutTheUser } from '../ClientCode/Login';

export function HeaderLoggedIn(props : any) {
  
  return (

    <div>

      <nav style={navCSS} className='navbar navbar-default'>

        <div className='row'>

          <div className='col-lg-10'>

            <div className='col-lg-2'>
              <p> 
                <span style={smartCSS}>Smart</span>
                <span style={bidCSS}>Bid</span>
              </p>
            </div>            

            <div className='col-lg-2'>
              <p style={{paddingTop:'3px'}}> 
                <span style={headerNameLoggedInCSS}>|&nbsp;&nbsp;&nbsp;{props.headerName}</span>
              </p>
            </div>

            <div className='col-lg-8'>

              <ul className='nav row'>

                  <li className="col-lg-3"><a href="#" onClick={loadHomePage}>Home</a></li>
                  <li className="col-lg-3"><a href="#" onClick={loadPublishAssetPage}>Publish Auctions</a></li> 
                  <li className="col-lg-4"><a href="#" onClick={loadCustomerDashboardPage}>Customer Dashboard</a></li>

              </ul>

            </div>

          </div>
        
          <div className='col-lg-2'>

            <div className='row'>

              <div className='col-lg-4'></div>
              <div className='col-lg-5' style={logoutCSS}><a href="#" onClick={logoutTheUser} style={{color: 'white'}}>Logout</a></div>

            </div>

          </div>

        </div>

      </nav>

    </div>

  );
  
}

