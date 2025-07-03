
export function validateUserInputValue(userInputValue : string)
{
    if( userInputValue == null || userInputValue == undefined || userInputValue === "" )
    {
        return false;
    }

    return true;
}

export function validateUserInputObject(userInputObject : {[index: string] : any}, userInputKeys : Array<string>)
{
    for( var currentInputKey of userInputKeys )
    {
        if( !validateUserInputValue(userInputObject[currentInputKey]) )
        {
            return false;
        }
    }

    return true;
}

export function validateUserInputObjectValue(userInputObject : {[index: string] : any})
{

    if( userInputObject == null || userInputObject == undefined || Object.keys(userInputObject).length === 0 
        || Object.values(userInputObject).length === 0 )
    {
        return false;
    }

    return true;
}

