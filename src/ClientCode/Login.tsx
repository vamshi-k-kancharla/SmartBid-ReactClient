import { loadHomePage } from "./Home";

import { sendHttpJsonRequestToSmartBidServerWithCallback } from "../HelperUtils/HttpRestAPIClient";

export async function Login( event : any )
{
    event.preventDefault();

    if( ( document.getElementById("id_email_address") as HTMLFormElement ).value == "" ||
    ( document.getElementById("id_password") as HTMLFormElement ).value == "" )
    {
        alert("All the input values are mandatory. please enter the details");
        loadHomePage();

        return;
    }

    let authenticateUserObject : { [index : string] : any } = {};

    authenticateUserObject["EmailAddress"] = (document.getElementById("id_email_address") as HTMLFormElement).value;
    authenticateUserObject["PasswordCode"] = window.btoa((document.getElementById("id_password") as HTMLFormElement).value);

    window.localStorage.setItem("CurrentUser_Password", authenticateUserObject.PasswordCode);

    console.log("Sending JSON based Http Request to Server : ");

    sendHttpJsonRequestToSmartBidServerWithCallback( "AuthenticateUser", authenticateUserObject,
        successResponseUserAuthFunction, failureResponseUserAuthFunction );
}

function successResponseUserAuthFunction( responseTextFromServer : string )
{
    let userAuthResponseObject = JSON.parse(responseTextFromServer);

    console.log("Received User details from Server.. = " + userAuthResponseObject.length);

    window.localStorage.setItem("CurrentUser_CustomerId", userAuthResponseObject[0].CustomerId);
    window.localStorage.setItem("CurrentUser_Name", userAuthResponseObject[0].Name);
    window.localStorage.setItem("CurrentUser_EmailAddress", userAuthResponseObject[0].EmailAddress);
    window.localStorage.setItem("CurrentUser_PhoneNumber", userAuthResponseObject[0].PhoneNumber);

    console.log("EmailAddress in cache.. = " + window.localStorage.getItem("CurrentUser_EmailAddress"));

    loadHomePage();
}

function failureResponseUserAuthFunction()
{
    alert("User authentication failed");
    loadHomePage();
}

