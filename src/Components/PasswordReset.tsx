

import { loadResetPasswordPage, loadResetPasswordSuccessfulPage, loadSetNewPasswordPage } from "../ClientCode/Home";
import { submitResetNewPassword, submitResetPasswordEmailDetails, validateOTPResetPassword } from "../ClientCode/PasswordReset";
import { httpImagesRequestURLPrefix } from "../HelperUtils/GlobalsForClient";
import { emailImageCSS, inputTextBoxPasswordResetCSS, passwordLengthContentCSS, passwordResetDivCSS, passwordResetHeadingCSS, resendOTPSubmitButtonCSS, resetPasswordContentCSS, resetPasswordHeadingCSS, sendOTPSubmitButtonCSS } from "../StyleSheets/PasswordResetSheet";
import { LoginModal } from "./LoginModal";

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

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_sendOTP" onClick={(event) => submitResetPasswordEmailDetails(event)}>Send OTP</button>

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

        <div style={{paddingLeft : '60px', paddingBottom : '10px', paddingTop : '20px'}}>

          <input type="text" placeholder="6-digit OTP" className="col-lg-10" style={inputTextBoxPasswordResetCSS} id="id_enterOTP"/>

        </div>

        <div style={{paddingLeft : '60px', paddingTop : '60px'}}>

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_verifyOTP" onClick={(event) => validateOTPResetPassword(event)}>Verify OTP</button>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '50px', paddingTop : '60px'}}>

          <button type="submit" className="col-lg-10" style={resendOTPSubmitButtonCSS} id="id_resendOTP" onClick={loadResetPasswordPage}>Resend OTP</button>

        </div>

      </div>

      <div className="col-lg-4"></div>

    </div>

  );
  
}


// Set New Password Page

export function SetNewPasswordPage() {

  let setNewPasswordContent = "Create a strong password for your account.";

  let passwordLengthContent = "Password must be atleast 8 characters long.";

  let newPasswordImageSource = httpImagesRequestURLPrefix + "RenderingImages/setNewPassword.jpg";

  return (

    <div className="row">

      <div className="col-lg-4"></div>

      <div className="row col-lg-4" style={passwordResetDivCSS}>

        <div style={{paddingLeft : '145px'}}>

          <p style={passwordResetHeadingCSS}>Password Reset</p>

        </div>

        <div style={{paddingLeft : '185px'}}>

          <img style={emailImageCSS} src={newPasswordImageSource}></img>

        </div>

        <div style={{paddingLeft : '146px', paddingTop : '15px'}}>

          <p style={resetPasswordHeadingCSS}>Set New Password</p>

        </div>

        <div style={{paddingLeft : '90px'}}>

          <p style={resetPasswordContentCSS}>{setNewPasswordContent}</p>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '20px', paddingTop : '20px'}}>

          <input type="password" placeholder="New Password" className="col-lg-10" style={inputTextBoxPasswordResetCSS} id="id_newPassword"/>

        </div>

        <div style={{paddingLeft : '60px', paddingBottom : '20px', paddingTop : '40px'}}>

          <input type="password" placeholder="Confirm New Password" className="col-lg-10" style={inputTextBoxPasswordResetCSS} id="id_confirmNewPassword"/>

        </div>

        <div style={{paddingLeft : '65px', paddingTop : '45px'}}>

          <p style={passwordLengthContentCSS}>{passwordLengthContent}</p>

        </div>

        <div style={{paddingLeft : '60px', paddingTop : '20px', paddingBottom : '50px'}}>

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_resetPassword" onClick={(event) => submitResetNewPassword(event)}>Reset Password</button>

        </div>

      </div>

      <div className="col-lg-4"></div>

    </div>

  );
  
}


// Password reset successful Page

export function PasswordResetSuccessfulPage() {

  let resetPasswordSuccessfulContent1 = "Your password has been successfully reset. Please login with";
  let resetPasswordSuccessfulContent2 = "Your new password.";

  let passwordResetSuccessfulImageSource = httpImagesRequestURLPrefix + "RenderingImages/passwordResetSuccessful.jpg";

  return (

    <div className="row">

      <div className="col-lg-4"></div>

      <div className="row col-lg-4" style={passwordResetDivCSS}>

        <div style={{paddingLeft : '145px'}}>

          <p style={passwordResetHeadingCSS}>Password Reset</p>

        </div>

        <div style={{paddingLeft : '185px'}}>

          <img style={emailImageCSS} src={passwordResetSuccessfulImageSource}></img>

        </div>

        <div style={{paddingLeft : '120px', paddingTop : '5px'}}>

          <p style={resetPasswordHeadingCSS}>Password Reset Successful!</p>

        </div>

        <div style={{paddingLeft : '40px'}}>

          <p style={resetPasswordContentCSS}>{resetPasswordSuccessfulContent1}</p>

        </div>

        <div style={{paddingLeft : '160px'}}>

          <p style={resetPasswordContentCSS}>{resetPasswordSuccessfulContent2}</p>

        </div>

        <div style={{paddingLeft : '60px', paddingTop : '20px', paddingBottom : '50px'}}>

          <button type="submit" className="col-lg-10" style={sendOTPSubmitButtonCSS} id="id_backToLogin" data-toggle='modal' data-target="#login-modal">Back to Login</button>

        </div>

      </div>

      <div className="col-lg-4"></div>

      <LoginModal />

    </div>

  );
  
}

