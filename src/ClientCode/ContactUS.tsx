
import { feedbackObjectKeysForUpload } from '../HelperUtils/GlobalsForClient';
import { validateUserInputObject } from '../HelperUtils/ClientInputValidator';
import { sendHttpJsonRequestToSmartBidServerWithCallback } from '../HelperUtils/HttpRestAPIClient'
import { loadHomePage } from './Home';


export async function submitContactUSFeedback(event:any)
{

    event.preventDefault();

    let feedbackDetailsObject : {[index : string] : any}= {};

    feedbackDetailsObject["CustomerName"] = (document.getElementById("id_name") as HTMLFormElement).value;
    feedbackDetailsObject["EmailAddress"] = (document.getElementById("id_email") as HTMLFormElement).value;
    feedbackDetailsObject["Subject"] = (document.getElementById("id_subject") as HTMLFormElement).value;
    feedbackDetailsObject["Message"] = (document.getElementById("id_message") as HTMLFormElement).value;

    console.log("Form submitted : customerName = " + feedbackDetailsObject.CustomerName);

    if( !validateUserInputObject(feedbackDetailsObject, feedbackObjectKeysForUpload) )
    {
        alert("one or more missing values from form input...Please re-enter");
        return;
    }

    await sendHttpJsonRequestToSmartBidServerWithCallback("AddFeedback", feedbackDetailsObject, successfulFeedbackDataFormSubmission,
      failureFeedbackDataFormSubmission
    );

}

function successfulFeedbackDataFormSubmission(httpResponseText:string)
{
  console.log("successfulFeedbackDataFormSubmission : " + httpResponseText);
  alert("Successfully added Feedback record to the table : " + httpResponseText);
  
  loadHomePage();
}

function failureFeedbackDataFormSubmission(httpStatusText:string)
{
  console.log("failureFeedbackDataFormSubmission : " + httpStatusText);
  alert("Failed to Add Feedback Record : " + httpStatusText);

  loadHomePage();
}

