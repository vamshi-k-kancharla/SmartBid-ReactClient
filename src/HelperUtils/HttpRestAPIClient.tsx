import { httpRequestURLPrefix } from "./GlobalsForClient";

let auctionDetailsResponse = "";

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


export async function sendHttpFileUploadRequestToSmartBidServerWithCallback(inputFileUploadRequest : string, inputFormData : FormData, 
    successCallbackFunction : any, failureCallbackFunction : any)
{
    let xmlHttpRequest = new XMLHttpRequest();
    let httpRequestURL = httpRequestURLPrefix;

    httpRequestURL += inputFileUploadRequest;

    console.log("Sending Http request (File Upload based): httpRequestURL = " + httpRequestURL);

    xmlHttpRequest.open('POST', httpRequestURL, true);

    xmlHttpRequest.onload = () => {

        console.log("First time load of xmlHttpRequest");

        if ( xmlHttpRequest.status == 200 )
        {
            console.log("Successfully completed the request = " + xmlHttpRequest.responseText);
            successCallbackFunction(xmlHttpRequest.responseText);
        }
        else
        {
            console.log("Error occured while sending the request = " + xmlHttpRequest.status);
            console.log("Error Text = " + xmlHttpRequest.statusText);

            failureCallbackFunction(xmlHttpRequest.responseText);  
        }
    };

    xmlHttpRequest.onerror = () => {

        console.log("XML http request has encountered an error");
        failureCallbackFunction(xmlHttpRequest.responseText);
    }

    xmlHttpRequest.send(inputFormData);

    console.log("Successfully sent the file based http request post");
}


export async function sendHttpRequestToSmartBidServerWithReturnValue(urlParamsString : string) : Promise<string>
{
    let xmlHttpRequest = new XMLHttpRequest();
    let httpRequestURL = httpRequestURLPrefix;

    auctionDetailsResponse = "";

    httpRequestURL += urlParamsString;

    console.log("Sending Http request (URL Encoded): httpRequestURL = " + httpRequestURL);

    xmlHttpRequest.open('GET', httpRequestURL);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xmlHttpRequest.onload = () => {

        console.log("First time load of xmlHttpRequest");

        if ( xmlHttpRequest.status == 200 )
        {
            console.log("Successfully completed the request = " + xmlHttpRequest.responseText);
            auctionDetailsResponse = xmlHttpRequest.responseText;
        }
        else
        {
            console.log("Error occured while sending the request = " + xmlHttpRequest.status);
            console.log("Error Text = " + xmlHttpRequest.statusText);
        }
    };

    xmlHttpRequest.onerror = () => {

        console.log("XML http request has encountered an error");
    }

    xmlHttpRequest.send();

    console.log("Successfully sent the http request ");

    await new Promise( resolve => setTimeout( resolve, 1000 ));
    return auctionDetailsResponse;
}


export async function sendHttpRequestToSmartBidServerWithCallbackFunction( urlParamsString : string, successCallbackFunction : any,
    failureCallbackFunction : any
)
{
    let xmlHttpRequest = new XMLHttpRequest();
    let httpRequestURL = httpRequestURLPrefix;

    auctionDetailsResponse = "";

    httpRequestURL += urlParamsString;

    console.log("Sending Http request (URL Encoded): httpRequestURL = " + httpRequestURL);

    xmlHttpRequest.open('GET', httpRequestURL);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xmlHttpRequest.onload = () => {

        console.log("First time load of xmlHttpRequest");

        if ( xmlHttpRequest.status == 200 )
        {
            console.log("Successfully completed the request = " + xmlHttpRequest.responseText);
            successCallbackFunction( xmlHttpRequest.responseText );
        }
        else
        {
            console.log("Error occured while sending the request = " + xmlHttpRequest.status);
            console.log("Error Text = " + xmlHttpRequest.statusText);

            failureCallbackFunction(xmlHttpRequest.responseText);
        }
    };

    xmlHttpRequest.onerror = () => {

        console.log("XML http request has encountered an error");

        failureCallbackFunction(xmlHttpRequest.statusText);
    }

    xmlHttpRequest.send();

    console.log("Successfully sent the http request ");
}


export async function sendHttpRequestToSmartBidServerWithCallbackFunctionObject( urlParamsString : string, successCallbackFunction : any,
    failureCallbackFunction : any, queryResponseObjectIndexString : string, queryResponseObject : any
)
{
    let xmlHttpRequest = new XMLHttpRequest();
    let httpRequestURL = httpRequestURLPrefix;

    auctionDetailsResponse = "";

    httpRequestURL += urlParamsString;

    console.log("Sending Http request (URL Encoded): httpRequestURL = " + httpRequestURL);

    xmlHttpRequest.open('GET', httpRequestURL);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xmlHttpRequest.onload = () => {

        console.log("First time load of xmlHttpRequest");

        if ( xmlHttpRequest.status == 200 )
        {
            console.log("Successfully completed the request = " + xmlHttpRequest.responseText);

            queryResponseObject[queryResponseObjectIndexString] = xmlHttpRequest.responseText;
            
            successCallbackFunction( queryResponseObject );
        }
        else
        {
            console.log("Error occured while sending the request = " + xmlHttpRequest.status);
            console.log("Error Text = " + xmlHttpRequest.statusText);

            failureCallbackFunction(xmlHttpRequest.responseText);
        }
    };

    xmlHttpRequest.onerror = () => {

        console.log("XML http request has encountered an error");

        failureCallbackFunction(xmlHttpRequest.statusText);
    }

    xmlHttpRequest.send();

    console.log("Successfully sent the http request ");
}

