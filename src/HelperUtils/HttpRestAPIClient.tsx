import { httpRequestURLPrefix } from "./GlobalsForClient";

export async function sendHttpJsonRequestToSmartBidServerWithCallback(inputQueryRequest : string, 
    inputJsonQueryObject : {[index:string] : any}, successfulCustomerDataFormSubmission : any,
    failureCustomerDataFormSubmission : any)
{
    let xmlHttpRequest = new XMLHttpRequest();
    let httpRequestURL = httpRequestURLPrefix;

    httpRequestURL += inputQueryRequest;

    console.log("Sending Http request (Json Encoded): httpRequestURL = " + httpRequestURL);

    xmlHttpRequest.open('POST', httpRequestURL);
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain');

    xmlHttpRequest.onload = () => {

        console.log("First time load of xmlHttpRequest");

        if ( xmlHttpRequest.status == 200 )
        {
            console.log("Successfully completed the request = " + xmlHttpRequest.responseText);
            successfulCustomerDataFormSubmission(xmlHttpRequest.responseText);
        }
        else
        {
            console.log("Error occured while sending the request = " + xmlHttpRequest.status);
            console.log("Error Text = " + xmlHttpRequest.statusText);

            failureCustomerDataFormSubmission(xmlHttpRequest.responseText);  
        }
    };

    xmlHttpRequest.onerror = () => {

        console.log("XML http request has encountered an error");
        failureCustomerDataFormSubmission(xmlHttpRequest.responseText);  
    }

    xmlHttpRequest.send(JSON.stringify(inputJsonQueryObject));

    console.log("Successfully sent the json based http request post");
}

