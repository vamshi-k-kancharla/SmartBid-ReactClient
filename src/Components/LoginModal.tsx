
import { loginModalDialogCSS, welcomeBackCSS, welcomeBackSubHeadingCSS, rememberMeCSS, forgotPasswordCSS, loginButtonCSS, dontHaveAccountCSS, closeButtonCSS} from '../StyleSheets/LoginModal';
import { loadSignUpPage } from '../ClientCode/Home';

import { formLabelCSS, formLabelMustCSS, textInputCSS, textInputDivCSS } from '../StyleSheets/SignUpStyleSheet';
import { Login } from '../ClientCode/Login';

export function LoginModal()
{

  return (

    <div id="login-modal" className="modal fade" style={loginModalDialogCSS}>

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">
            
            <div className="row">

              <div className='col-lg-2'></div>
              <div className='col-lg-6' style={welcomeBackCSS}>Welcome Back</div>
              <button data-dismiss='modal' style={closeButtonCSS}>X</button>

            </div>

            <div className="row">

              <div className='col-lg-1'></div>
              <div className='col-lg-6' style={welcomeBackSubHeadingCSS}>Login to participate in auction for buying, selling home</div>

            </div>

          </div>

          <div className="modal-body">

            <div className="col-lg-12">

              <p className="col-lg-12 text-left" style={formLabelCSS}>Email <span style={formLabelMustCSS}>*</span></p>

              <div style={textInputDivCSS}>

                <input type="text" className="col-lg-8" style={textInputCSS} placeholder="Enter Email Address" id="id_email_address"/>

              </div>
            
            </div>

            <div className="col-lg-12" style={{paddingTop:'15px'}}>

              <p className="col-lg-12 text-left" style={formLabelCSS}>Password <span style={formLabelMustCSS}>*</span></p>

              <div style={textInputDivCSS}>

                <input type="password" className="col-lg-8" style={textInputCSS} placeholder="Enter Password" id="id_password"/>

              </div>
            
            </div>

            <div className="col-lg-12" style={{paddingTop:'20px'}}>

              <div className="col-lg-5">

                <input type="checkbox" id="id_remember_me"/>
                <label htmlFor='id_remember_me' style={rememberMeCSS}>&nbsp;&nbsp;Remember Me</label>

              </div>

              <div className="col-lg-4">

                <a href='#' style={forgotPasswordCSS}>Forgot Password ?</a>

              </div>

            </div>

            <div className="col-lg-12" style={{paddingTop:'25px'}}>

              <div style={textInputDivCSS}>

                <button className="col-lg-8" style={loginButtonCSS} id="id_login" data-dismiss="modal" onClick={Login}>Login</button>

              </div>
            
            </div>

            <div className="col-lg-12" style={{paddingTop:'25px'}}>

              <div style={textInputDivCSS}>

                <p style={dontHaveAccountCSS}><span>Don't have an account ?</span><a href="#" data-dismiss='modal' onClick={loadSignUpPage}>&nbsp;Create Account</a></p>

              </div>
            
            </div>

          </div>

          <div className="modal-header">
          </div>

        </div>

      </div>

    </div>

  );

}

