import { StrictMode } from 'react';
import { SignUpPage } from '../Components/SignUp';

import { customerObjectKeysForUpload } from '../HelperUtils/GlobalsForClient';
import { validateUserInputObject } from '../HelperUtils/ClientInputValidator';
import { sendHttpJsonRequestToSmartBidServerWithCallback } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage } from './Home';


export function SignUp() {

  return (
    
    <StrictMode>

      <SignUpPage />
      
    </StrictMode>

  );

}


export async function submitSignUpDetails(event:any)
{

    event.preventDefault();

    let customerDetailsObject : {[index : string] : any}= {};

    customerDetailsObject["Name"] = (document.getElementById("id_name") as HTMLFormElement).value;
    customerDetailsObject["PhoneNumber"] = (document.getElementById("id_phone_number") as HTMLFormElement).value;
    customerDetailsObject["EmailAddress"] = (document.getElementById("id_email") as HTMLFormElement).value;
    customerDetailsObject["UserType"] = (document.getElementById("id_user_type") as HTMLFormElement).value;
    customerDetailsObject["Country"] = (document.getElementById("id_country") as HTMLFormElement).value;
    customerDetailsObject["State"] = (document.getElementById("id_state") as HTMLFormElement).value;
    customerDetailsObject["City"] = (document.getElementById("id_city") as HTMLFormElement).value;
    customerDetailsObject["Address"] = (document.getElementById("id_address") as HTMLFormElement).value;
    customerDetailsObject["Password"] = window.btoa((document.getElementById("id_password") as HTMLFormElement).value);
    customerDetailsObject["PasswordReentry"] = window.btoa((document.getElementById("id_password_reentry") as HTMLFormElement).value);

    console.log("Form submitted : customerName = " + customerDetailsObject.Name);

    for( var currentInputKey of Object.keys(customerDetailsObject) )
    {
      console.log("Form Key = " + currentInputKey + " , Value = " + customerDetailsObject[currentInputKey]);
    }
    
    if( !validateUserInputObject(customerDetailsObject, customerObjectKeysForUpload) )
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

    await sendHttpJsonRequestToSmartBidServerWithCallback("AddCustomer", customerDetailsObject, successfulCustomerDataFormSubmission,
      failureCustomerDataFormSubmission
    );
    
    alert("Form details submitted successfully");
}

function successfulCustomerDataFormSubmission(httpResponseText:string)
{
  console.log("successfulCustomerDataFormSubmission : " + httpResponseText);
  alert("Successfully added customer record to the table : " + httpResponseText);
  
  loadHomePage();
}

function failureCustomerDataFormSubmission(httpStatusText:string)
{
  console.log("failureCustomerDataFormSubmission : " + httpStatusText);
  alert("Failed to Add Customer Record : " + httpStatusText);

  loadHomePage();
}

