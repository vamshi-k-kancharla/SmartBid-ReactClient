
import { validateUserInputObject } from '../HelperUtils/ClientInputValidator';
import { customerObjectKeysForPasswordReset } from '../HelperUtils/GlobalsForClient';
import { loadEnterOTPPage, loadResetPasswordPage } from './Home';
import { sendHttpRequestToSmartBidServerWithCallbackFunction } from '../HelperUtils/HttpRestAPIClient'

export async function submitResetPasswordEmailDetails(event:any)
{

    event.preventDefault();

    let customerDetailsObject : {[index : string] : any}= {};

    customerDetailsObject["EmailAddress"] = (document.getElementById("id_email") as HTMLFormElement).value;

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


