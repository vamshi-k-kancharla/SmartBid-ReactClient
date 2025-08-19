

import { loadEnterOTPPage } from "../ClientCode/Home";
import { httpImagesRequestURLPrefix } from "../HelperUtils/GlobalsForClient";
import { emailImageCSS, inputTextBoxPasswordResetCSS, passwordResetDivCSS, passwordResetHeadingCSS, resendOTPSubmitButtonCSS, resetPasswordContentCSS, resetPasswordHeadingCSS, sendOTPSubmitButtonCSS } from "../StyleSheets/PasswordResetSheet";

// Password Reset Page

export function PasswordResetPage() {

  let resetPasswordContent = "Enter your email address and we will send you OTP to reset";
  let resetPasswordContent2 = "Your password.";

  let emailImageSource = httpImagesRequestURLPrefix + "RenderingImages/contactus-email.jpg";

  return (

    <div className="row">

      <div className="col-lg-4"></div>

      <div className="row col-lg-4" style={passwordResetDivCSS}>

        <div style={{paddingLeft : '145px'}}>

          <p style={passwordResetHeadingCSS}>Password Reset</p>

        </div>

        <div style={{paddingLeft : '185px'}}>

          <img style={emailImageCSS} src={emailImageSource}></img>

        </div>

        <div style={{paddingLeft : '135px', paddingTop : '15px'}}>

          <p style={resetPasswordHeadingCSS}>Reset Your Password</p>

        </div>

        <div style={{paddingLeft : '40px', paddingTop : '5px'}}>

          <p style={resetPasswordContentCSS}>{resetPasswordContent}</p>

        </div>

        <div style={{paddingLeft : '170px'}}>

          <p style={resetPasswordContentCSS}>{resetPasswordContent2}</p>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '10px', paddingTop : '15px'}}>

          <input type="email" placeholder="Your Email Address" className="col-lg-10" style={inputTextBoxPasswordResetCSS} id="id_email"/>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '50px', paddingTop : '60px'}}>

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_sendOTP" onClick={loadEnterOTPPage}>Send OTP</button>

        </div>

      </div>

      <div className="col-lg-4"></div>

    </div>

  );
  
}

// Enter OTP Page

export function EnterOTPPage() {

  let enterOTPContent = "We have sent a 6-digit OTP to your email address.";

  let emailImageSource = httpImagesRequestURLPrefix + "RenderingImages/contactus-email.jpg";

  return (

    <div className="row">

      <div className="col-lg-4"></div>

      <div className="row col-lg-4" style={passwordResetDivCSS}>

        <div style={{paddingLeft : '145px'}}>

          <p style={passwordResetHeadingCSS}>Password Reset</p>

        </div>

        <div style={{paddingLeft : '185px'}}>

          <img style={emailImageCSS} src={emailImageSource}></img>

        </div>

        <div style={{paddingLeft : '167px', paddingTop : '15px'}}>

          <p style={resetPasswordHeadingCSS}>Enter OTP</p>

        </div>

        <div style={{paddingLeft : '65px', paddingTop : '5px'}}>

          <p style={resetPasswordContentCSS}>{enterOTPContent}</p>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '10px', paddingTop : '15px'}}>

          <input type="text" placeholder="6-digit OTP" className="col-lg-10" style={inputTextBoxPasswordResetCSS} id="id_enterOTP"/>

        </div>

        <div style={{paddingLeft : '60px', paddingTop : '60px'}}>

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_verifyOTP" onClick={(event) => (event)}>Verify OTP</button>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '50px', paddingTop : '60px'}}>

          <button type="submit" className="col-lg-10" style={resendOTPSubmitButtonCSS} id="id_resendOTP" onClick={(event) => (event)}>Resend OTP</button>

        </div>

      </div>

      <div className="col-lg-4"></div>

    </div>

  );
  
}

