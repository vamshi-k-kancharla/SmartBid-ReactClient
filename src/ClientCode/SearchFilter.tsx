
import { sendHttpRequestToSmartBidServerWithCallbackFunction } from "../HelperUtils/HttpRestAPIClient";
import { removeAllChildrenFromPaginationPane, renderPaginationListPane } from "./AuctionDisplay";
import { loadHomePageAuctionDetails, loadHomePageWithoutAuctionDetails } from "./Home";

// Populate the City Selection Box

export function populateCitySelectionBox()
{

  let citySelectionBox = document.getElementById("id_city");

  removeAllChildrenFromCurrentNode("id_city");

  appendOptionChildToCurrentNode( citySelectionBox!, "Select City");

  let currentCityColonyObject = JSON.parse( window.localStorage.getItem("SearchFilterCurrentValues")! );

  for( let currentCity in currentCityColonyObject )
  {

    appendOptionChildToCurrentNode( citySelectionBox!, currentCity );

  }

}


export function removeAllChildrenFromCurrentNode(inputNodeId : string)
{

  let currentNode = document.getElementById(inputNodeId);

  while( currentNode?.hasChildNodes() )
  {
    currentNode.removeChild(currentNode.firstChild!);
  }

}


export function appendOptionChildToCurrentNode(currentNode : HTMLElement, inputOptionText : string)
{

  let currentOptionTagObject = document.createElement('OPTION');
  currentOptionTagObject.innerHTML = inputOptionText;

  currentNode?.appendChild(currentOptionTagObject);

}

// Populate the Colony Selection Box

export function populateColonySelectionBox()
{

  let citySelectionBoxValue = (document.getElementById("id_city") as HTMLFormElement).value;

  console.log("populateColonySelectionBox:citySelectionBoxValue = " + citySelectionBoxValue);

  removeAllChildrenFromCurrentNode("id_colony");

  let colonySelectionBox = document.getElementById("id_colony");

  appendOptionChildToCurrentNode( colonySelectionBox!, "Select Colony");

  let currentCityColonyObject = JSON.parse( window.localStorage.getItem("SearchFilterCurrentValues")! );

  for( let currentCity in currentCityColonyObject )
  {

    if( currentCity == citySelectionBoxValue )
    {

      let currentColoniesArray = currentCityColonyObject[currentCity];

      for( let currentColony of currentColoniesArray )
      {
        
        appendOptionChildToCurrentNode( colonySelectionBox!, currentColony );

      }
    }
  }
}


// Apply the search filter

export function applyTheSearchFilter()
{

  let retrieveAuctionsRequestUrlString = "RetrieveAuctions?Status=Open";
    
  let citySelectionBoxValue = (document.getElementById("id_city") as HTMLFormElement).value;

  if( citySelectionBoxValue.toLocaleLowerCase() != 'select city' &&  citySelectionBoxValue.toLocaleLowerCase() != '' )
  {
    retrieveAuctionsRequestUrlString += "&City=" + citySelectionBoxValue;
  }

  console.log("applyTheSearchFilter.citySelectionBoxValue = " + citySelectionBoxValue);

  let colonySelectionBoxValue = (document.getElementById("id_colony") as HTMLFormElement).value;

  if( colonySelectionBoxValue.toLocaleLowerCase() != 'select colony' && colonySelectionBoxValue.toLocaleLowerCase() != '' )
  {
    retrieveAuctionsRequestUrlString += "&Colony=" + colonySelectionBoxValue;
  }

  console.log("applyTheSearchFilter.colonySelectionBoxValue = " + colonySelectionBoxValue);

  let assetTypeSelectionBoxValue = (document.getElementById("id_asset_type") as HTMLFormElement).value;

  if( assetTypeSelectionBoxValue.toLocaleLowerCase() != '' )
  {
    retrieveAuctionsRequestUrlString += "&AssetType=" + assetTypeSelectionBoxValue;
  }

  console.log("applyTheSearchFilter.assetTypeSelectionBoxValue = " + assetTypeSelectionBoxValue);

  console.log("applyTheSearchFilter.retrieveAuctionsRequestUrlString = " + retrieveAuctionsRequestUrlString);

  sendHttpRequestToSmartBidServerWithCallbackFunction( retrieveAuctionsRequestUrlString, successfulSearchFilterResponseFunction,
        failureSearchFilterResponseFunction
     );

}

export function successfulSearchFilterResponseFunction( auctionResponseString : string)
{
    populateCitySelectionBox();
    
    // removeAllChildrenFromPaginationPane();

    loadHomePageAuctionDetails(auctionResponseString, 0);

    let totalNumberOfAuctions = JSON.parse(auctionResponseString).length;
    let noOfAuctionPages = Math.floor( (totalNumberOfAuctions / 8) ) + ( (totalNumberOfAuctions % 8 == 0) ? 0 : 1 );

    console.log("successfulSearchFilterResponseFunction.totalNumberOfAuctions = " + totalNumberOfAuctions + " , no of pages = " + noOfAuctionPages );

    renderPaginationListPane(auctionResponseString, noOfAuctionPages, 0);
}


export function failureSearchFilterResponseFunction( auctionResponseString : string )
{

    alert("Couldn't retrieve the details of auctioned properties => " + auctionResponseString);
    loadHomePageWithoutAuctionDetails();
}



