
export function loadSearchFilterValuesIntoCache(auctionResponseString : string)
{
    
    let auctionResponseObject = JSON.parse(auctionResponseString);

    let searchFilterObject : {[index : string] : any} = {};

    for( let currentAuction of auctionResponseObject )
    {
        currentAuction.City = String(currentAuction.City).toLocaleLowerCase();
        currentAuction.Colony = String(currentAuction.Colony).toLocaleLowerCase();
    }

    for( let currentAuction of auctionResponseObject )
    {
        
        if( Object.keys(searchFilterObject).indexOf(currentAuction.City) != -1 )
        {
            if( searchFilterObject[currentAuction.City].indexOf(currentAuction.Colony) == -1 )
            {
                searchFilterObject[currentAuction.City].push(currentAuction.Colony);
            }
        }
        else
        {
            searchFilterObject[currentAuction.City] = [];

            if( searchFilterObject[currentAuction.City].indexOf(currentAuction.Colony) == -1 )
            {
                searchFilterObject[currentAuction.City].push(currentAuction.Colony);
            }
        }
    }

    window.localStorage.setItem("SearchFilterCurrentValues" , JSON.stringify(searchFilterObject));

    console.log( "loadSearchFilterValuesIntoCache : " + window.localStorage.getItem("SearchFilterCurrentValues"));

}


