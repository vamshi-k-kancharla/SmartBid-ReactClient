
import { validateUserInputObject } from '../HelperUtils/ClientInputValidator';
import { customerObjectKeysForOTPValidation, customerObjectKeysForPasswordReset, customerObjectKeysForSetNewPassword } from '../HelperUtils/GlobalsForClient';
import { loadEnterOTPPage, loadResetPasswordPage, loadResetPasswordSuccessfulPage, loadSetNewPasswordPage } from './Home';
import { sendHttpJsonRequestToSmartBidServerWithCallback, sendHttpRequestToSmartBidServerWithCallbackFunction } from '../HelperUtils/HttpRestAPIClient'

// Send OTP to registered email address

export async function submitResetPasswordEmailDetails(event:any)
{

    event.preventDefault();

    let customerDetailsObject : {[index : string] : any}= {};

    customerDetailsObject["EmailAddress"] = (document.getElementById("id_email") as HTMLFormElement).value;

    window.localStorage.setItem( "PasswordReset_EmailAddress", customerDetailsObject["EmailAddress"]);

    console.log("submitResetPasswordEmailDetails : EmailAddress = " + customerDetailsObject.EmailAddress);

    if( !validateUserInputObject(customerDetailsObject, customerObjectKeysForPasswordReset) )
    {
        alert("Email address is missing from form input...Please re-enter");
        return;
    }

    let sendOTPUrlString = "SendOTPToCustomer?EmailAddress=" + customerDetailsObject.EmailAddress;
    
    await sendHttpRequestToSmartBidServerWithCallbackFunction( sendOTPUrlString, 
      successfulResponseSendOTP, failureResponseSendOTP );

    loadEnterOTPPage();

}

function successfulResponseSendOTP(httpResponseText:string)
{
  console.log("successfulResponseSendOTP : " + httpResponseText);
  alert("Successfully sent the OTP to the customer's email");
  
  loadEnterOTPPage();
}

function failureResponseSendOTP(httpStatusText:string)
{
  console.log("failureResponseSendOTP : " + httpStatusText);
  alert("customer's email address wasn't found to send the OTP : " + httpStatusText);

  loadResetPasswordPage();
}


// Validate OTP received on specific email address

export async function validateOTPResetPassword(event:any)
{

    event.preventDefault();

    let customerDetailsObject : {[index : string] : any}= {};

    customerDetailsObject["EmailAddress"] = window.localStorage.getItem("PasswordReset_EmailAddress");
    customerDetailsObject["currentOTP"] = (document.getElementById("id_enterOTP") as HTMLFormElement).value;

    console.log("validateOTPResetPassword : EmailAddress = " + customerDetailsObject.EmailAddress);

    if( !validateUserInputObject(customerDetailsObject, customerObjectKeysForOTPValidation) )
    {
        alert("Email address / OTP are missing from form input...Please re-enter");
        return;
    }

    let validateOTPUrlString = "ValidateCustomerOTP?EmailAddress=" + customerDetailsObject.EmailAddress + "&currentOTP=" + 
        customerDetailsObject.currentOTP;
    
    await sendHttpRequestToSmartBidServerWithCallbackFunction( validateOTPUrlString, 
      successfulResponseValidateOTP, failureResponseValidateOTP );

}

function successfulResponseValidateOTP(httpResponseText:string)
{
  console.log("successfulResponseValidateOTP : " + httpResponseText);

  loadSetNewPasswordPage();
}

function failureResponseValidateOTP(httpStatusText:string)
{
  console.log("failureResponseValidateOTP : " + httpStatusText);
  alert("OTP Validation failed..Please re-try : " + httpStatusText);

  loadEnterOTPPage();
}

// ReSet new password

export async function submitResetNewPassword(event:any)
{

    event.preventDefault();

    let customerDetailsObject : {[index : string] : any}= {};

    customerDetailsObject["EmailAddress"] = window.localStorage.getItem("PasswordReset_EmailAddress");
    customerDetailsObject["Password"] = window.btoa((document.getElementById("id_newPassword") as HTMLFormElement).value);
    customerDetailsObject["PasswordReentry"] = window.btoa((document.getElementById("id_confirmNewPassword") as HTMLFormElement).value);

    console.log("Form submitted : EmailAddress = " + customerDetailsObject.EmailAddress);

    if( !validateUserInputObject(customerDetailsObject, customerObjectKeysForSetNewPassword) )
    {
        alert("one or more missing values from form input...Please re-enter");
        return;
    }

    if( customerDetailsObject.Password != customerDetailsObject.PasswordReentry )
    {
        alert("Entered passwords don't match...Please re-enter");
        return;
    }

    console.log("Entered passwords match...proceeding further with details submission");

    await sendHttpJsonRequestToSmartBidServerWithCallback("ResetNewPassword", customerDetailsObject, successfulSetNewPasswordFormSubmission,
      failureSetNewPasswordFormSubmission
    );
    
}

function successfulSetNewPasswordFormSubmission(httpResponseText:string)
{
  console.log("successfulSetNewPasswordFormSubmission : " + httpResponseText);
  
  loadResetPasswordSuccessfulPage();
}

function failureSetNewPasswordFormSubmission(httpStatusText:string)
{
  console.log("failureSetNewPasswordFormSubmission : " + httpStatusText);
  alert("Failed to update new password : " + httpStatusText);

  loadSetNewPasswordPage();
}


