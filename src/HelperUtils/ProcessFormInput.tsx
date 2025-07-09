
export function processInputDataFromForm(userInputObject : { [index: string] : any }, userInputObjectKeys : Array<string>, 
    userFormIds : Array<string>)
{
    for( var currentInputKey of userInputObjectKeys )
    {
        let formElementId = userFormIds[userInputObjectKeys.indexOf(currentInputKey)];
        userInputObject[currentInputKey] = ( document.getElementById(formElementId) == null ) ? null : 
                                (document.getElementById(formElementId) as HTMLFormElement).value;
    }

    return userInputObject;
}

export function createFormInputData( userInputObject : {[index : string] : any}, userInputObjectKeys : Array<string> )
{
    let formInputData = new FormData();

    for( var currentInputKey of userInputObjectKeys )
    {
        formInputData.append(currentInputKey, userInputObject[currentInputKey]);
    }

    return formInputData;
}

