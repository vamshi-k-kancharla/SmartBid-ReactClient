import { loadHomePageAuctionDetails, loadHomePageWithoutAuctionDetails } from "./Home";

import { sendHttpRequestToSmartBidServerWithCallbackFunction } from "../HelperUtils/HttpRestAPIClient";
import { loadSearchFilterValuesIntoCache } from "../HelperUtils/SearchFilterHelperUtils";
import { populateCitySelectionBox } from "./SearchFilter";

export function RetrieveAuctions()
{

    let retrieveAuctionsRequestUrlString = "RetrieveAuctions?Status=Open";
    
    sendHttpRequestToSmartBidServerWithCallbackFunction( retrieveAuctionsRequestUrlString, successfulAuctionDetailsResponseFunction,
        failureAuctionDetailsResponseFunction
     );

}

export function filterOutSellerCustomerId(auctionResponseString : string) : string
{

    let currentSellerCustomerId = window.localStorage.getItem("CurrentUser_CustomerId");

    console.log("filterOutSellerCustomerId : currentSellerCustomerId = " + currentSellerCustomerId);

    if( currentSellerCustomerId == null || currentSellerCustomerId == undefined || currentSellerCustomerId == "" )
    {
      return auctionResponseString;
    }

    let filteredAuctionResponseObject : Array<{[index: string] : any }>= [];

    let auctionResponseObjectArray = JSON.parse(auctionResponseString);

    for( let currentAuctionObject of auctionResponseObjectArray )
    {

      console.log("filterOutSellerCustomerId : SellerCustomerId = " + String(currentAuctionObject["SellerCustomerId"]) );

      if( String(currentAuctionObject["SellerCustomerId"]) != String(currentSellerCustomerId) )
      {
        filteredAuctionResponseObject.push(currentAuctionObject);
      }
    }

    return JSON.stringify(filteredAuctionResponseObject);

}

export function successfulAuctionDetailsResponseFunction( auctionResponseString : string)
{
    loadSearchFilterValuesIntoCache(auctionResponseString);

    populateCitySelectionBox();

    console.log("successfulAuctionDetailsResponseFunction : Filtering the auction response string");

    let filteredAuctionResponseString : string = filterOutSellerCustomerId(auctionResponseString);

    loadHomePageAuctionDetails(filteredAuctionResponseString, 0);
}


export function failureAuctionDetailsResponseFunction( auctionResponseString : string )
{

    alert("Couldn't retrieve the details of auctioned properties => " + auctionResponseString);
    loadHomePageWithoutAuctionDetails();
}


/**********************************************************************************************************************
 * 
 *  Pagination Implementation
 * 
************************************************************************************************************************/

export function removeAllChildrenFromPaginationPane()
{

  let paginationDivListPane = document.getElementById("auctionDisplay_PaginationList");

  while( paginationDivListPane?.hasChildNodes() )
  {
    paginationDivListPane.removeChild(paginationDivListPane.firstChild!);
  }

}

export function renderPaginationListPane(auctionDetailsResponse: string, paginationListItemCount: number, 
    currentAuctionDetailPage : number) {

  // Remove all the children from Pagination List Div Pane

  removeAllChildrenFromPaginationPane();

  console.log("renderPaginationListPane:currentAuctionDetailPage = " + currentAuctionDetailPage);

  // Add My Bids as Children

  let paginationListPane = document.getElementById("auctionDisplay_PaginationList");

  for( let i = 0 ; i < paginationListItemCount; i++ )
  {

    let paginationListItem = document.createElement('li');

    paginationListItem.className = ( currentAuctionDetailPage == i ) ? 'active' : '';
    paginationListItem.id = 'paginationlistitem_' + i;

    let paginationListAnchorItem = document.createElement('a');

    paginationListAnchorItem.href = "#";

    paginationListAnchorItem.onclick = () => loadHomePageAuctionDetails(auctionDetailsResponse, i);

    paginationListAnchorItem.style.paddingTop = '12px';
    paginationListAnchorItem.style.paddingBottom = '12px';
    paginationListAnchorItem.style.paddingLeft = '15px';
    paginationListAnchorItem.style.paddingRight = '15px';

    paginationListAnchorItem.innerHTML = String(i+1);

    paginationListItem.append(paginationListAnchorItem);

    paginationListPane?.append(paginationListItem);
    
  }

}

export function changeTheActiveStatusOfPaginationList(currentIndexItem: number, totalNoOfItems : number)
{

    for( let i = 0 ; i < totalNoOfItems; i++ )
    {

        let currentListItemOfPagination = document.getElementById('paginationlistitem_' + i);

        if(currentListItemOfPagination != null)
        {
            currentListItemOfPagination.className = ( ( currentIndexItem == i ) ? 'active' : '' );
        }

    }
}


