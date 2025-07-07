
import {navCSS, smartCSS, bidCSS, headerNameLoggedInCSS, logoutCSS} from '../StyleSheets/HeaderStyleSheet';
import { loadHomePage } from '../ClientCode/Home';

export function HeaderLoggedIn(props : any) {
  
  return (

    <div>

      <nav style={navCSS} className='navbar navbar-default'>

        <div className='row'>

          <div className='col-lg-9'>

            <div className='col-lg-2'>
              <p> 
                <span style={smartCSS}>Smart</span>
                <span style={bidCSS}>Bid</span>
              </p>
            </div>            

            <div className='col-lg-3'>
              <p style={{paddingTop:'3px'}}> 
                <span style={headerNameLoggedInCSS}>|&nbsp;&nbsp;&nbsp;{props.headerName}</span>
              </p>
            </div>

          </div>
        
          <div className='col-lg-3'>

            <div className='row'>

              <div className='col-lg-6'></div>
              <div className='col-lg-3' style={logoutCSS}><a href="#" onClick={loadHomePage} style={{color: 'white'}}>Logout</a></div>

            </div>

          </div>

        </div>

      </nav>

    </div>

  );
  
}

