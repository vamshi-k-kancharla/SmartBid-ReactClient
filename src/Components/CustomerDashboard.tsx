
import { customerAuctionsAndBidsContentCSS, customerAuctionsAndBidsDivCSS, customerDashboardPaneCSS,
  customerAuctionsAndBidsCountCSS,
  customerAuctionsAndBidsNavCSS,
 } from '../StyleSheets/CustomerDashboardSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';

import { closeAuction } from '../ClientCode/CustomerDashboard';

import { httpImagesRequestURLPrefix } from '../HelperUtils/GlobalsForClient';

export function CustomerDashboardPage(props:any) {
  
  return (

    <div>

      <div>
        <HeaderLoggedIn headerName="Dashboard" /> 
      </div>

      <div className='row' style={{width:"99%"}}>

        <div className='col-lg-1'>
        </div>

        <div className='col-lg-10' style={customerDashboardPaneCSS}>

          <DashboardPane auctionsAndBidsResponse = {props.auctionsAndBidsResponse} />

        </div>

        <div className='col-lg-1'>
        </div>

      </div>

    </div>

  );
  
}

export function DashboardPane(props:any) {

  let auctionsAndBidResponse = JSON.parse(props.auctionsAndBidsResponse);
  let customerAuctionsCount = auctionsAndBidResponse.CustomerAuctions.length;
  let customerBidsCount = auctionsAndBidResponse.CustomerBids.length;

  console.log("CustomerDashboard : DashboardPane => " + props.auctionsAndBidsResponse);
  console.log("CustomerDashboard : DashboardPane => customerAuctionsCount = " + customerAuctionsCount);

  renderMyAuctionsPane(auctionsAndBidResponse.CustomerAuctions);

  let foreverImageSourcePath = httpImagesRequestURLPrefix + "ForeverImage.jpg";

  return (

    <div>

      <div className='row'>

        <div style={{paddingLeft:'30px', paddingRight:'30px'}} className='col-lg-3'>

          <div style={customerAuctionsAndBidsDivCSS}>

            <div style={customerAuctionsAndBidsContentCSS}>My Auctions</div>
            <div style={customerAuctionsAndBidsCountCSS}>{customerAuctionsCount}</div>

          </div>

        </div>

        <div style={{paddingLeft:'30px', paddingRight:'30px'}} className='col-lg-3'>

          <div style={customerAuctionsAndBidsDivCSS}>

            <div style={customerAuctionsAndBidsContentCSS}>My Bids</div>
            <div style={customerAuctionsAndBidsCountCSS}>{customerBidsCount}</div>

          </div>

        </div>

      </div>

      <br/>

      <div style={customerAuctionsAndBidsNavCSS}>

        <nav className="navbar navbar-default" style={{paddingTop:'4px', paddingLeft:'30px'}}>

          <ul className='nav row'>

            <li className='col-lg-3'><a href='#' onClick={() => renderMyAuctionsPane(auctionsAndBidResponse.CustomerAuctions)}>My Auctions</a></li>
            <li className='col-lg-3'><a href='#' onClick={() => renderMyBidsPane(auctionsAndBidResponse.CustomerBids)}>My Bids</a></li>

          </ul>

        </nav>

      </div>

      <br/>

      <div id = 'id_customer_auctions_bids_div' style={{paddingLeft : '15px'}} onLoad={() => renderMyAuctionsPane(auctionsAndBidResponse.CustomerAuctions)}>

        <img src={foreverImageSourcePath}></img>

      </div>

    </div>

  );
  
}

export function removeAllChildrenFromAuctionsBidsPane()
{
  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  while( auctionsAndBidsDivPane?.hasChildNodes() )
  {
    auctionsAndBidsDivPane.removeChild(auctionsAndBidsDivPane.firstChild!);
  }
}


export function renderMyBidsPane(customerBidsResponse : Array<{[index : string] : any}>) {

  // Remove all the children from Auctions&Bids Pane

  removeAllChildrenFromAuctionsBidsPane();

  // My Bids heading
  
  let myBidsDivElement : any = returnAuctionsAndBidsDivPane("My Bids", "Track all your Bids and their current status");

  // Add My Bids as Children

  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  for( let i = 0 ; i < customerBidsResponse.length; i++ )
  {

    let myAuctionsAndBidsBufferDivPane = document.createElement('div');

    myAuctionsAndBidsBufferDivPane.className = 'col-lg-12';

    myAuctionsAndBidsBufferDivPane.style.height = '20px';

    myBidsDivElement.append(myAuctionsAndBidsBufferDivPane);
    let myIndiBidDivElement : any = returnIndividualBidDivPane(customerBidsResponse, i);
    myBidsDivElement?.append(myIndiBidDivElement);
  }

  auctionsAndBidsDivPane?.append(myBidsDivElement);

}


export function returnAuctionsAndBidsDivPane( auctionAndBidsHeading : string, auctionAndBidsSubHeading : string ) : any {

  let myAuctionsAndBidsDivPane = document.createElement('div');

  myAuctionsAndBidsDivPane.className = 'col-lg-12';

  myAuctionsAndBidsDivPane.style.paddingTop = '10px';
  myAuctionsAndBidsDivPane.style.paddingBottom = '20px';
  myAuctionsAndBidsDivPane.style.paddingLeft = '15px';
  myAuctionsAndBidsDivPane.style.border = '1px solid #C6C6C6';
  myAuctionsAndBidsDivPane.style.borderRadius = '8px';

  let currentTextHeadingNode = returnAuctionsAndBidsHeadingNode(auctionAndBidsHeading);
  myAuctionsAndBidsDivPane.append(currentTextHeadingNode);

  let currentTextSubHeadingNode = returnAuctionsAndBidsSubHeadingNode(auctionAndBidsSubHeading);
  myAuctionsAndBidsDivPane.append(currentTextSubHeadingNode);

  return myAuctionsAndBidsDivPane;

}

function returnAuctionsAndBidsHeadingNode( auctionAndBidsHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(auctionAndBidsHeading);

  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '700';
  currentHeadingDivNode.style.fontStyle = 'Bold';
  currentHeadingDivNode.style.fontSize = '24px';
  currentHeadingDivNode.style.lineHeight = '36px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#292524';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}

function returnAuctionsAndBidsSubHeadingNode( auctionAndBidsSubHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(auctionAndBidsSubHeading);

  currentHeadingDivNode.style.paddingTop = '5px';
  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '400';
  currentHeadingDivNode.style.fontStyle = 'Regular';
  currentHeadingDivNode.style.fontSize = '12px';
  currentHeadingDivNode.style.lineHeight = '18px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#57534E';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}


/********************************************************************************************************************

My Bids Div Pane

********************************************************************************************************************/


function returnIndividualBidDivPane( bidDetailsResponse : Array<{[index : string] : any}>, bidIndex : any ) : any {

  console.log("assetId = " + bidDetailsResponse[bidIndex].AssetId);
  
  let assetType = bidDetailsResponse[bidIndex].AssetType;
  let assetColony = bidDetailsResponse[bidIndex].Colony;
  let assetCurrentBidPrice = bidDetailsResponse[bidIndex].CurrentBidPrice;
  let assetId = bidDetailsResponse[bidIndex].AssetId;
  let imageSourcePath = httpImagesRequestURLPrefix + "asset_" + assetId + "_file_0.jpg";
  let assetStatus = bidDetailsResponse[bidIndex].Status;


  console.log("Image Source Path = " + imageSourcePath);
  
  let myBidsDivPane = document.createElement('div');

  myBidsDivPane.className = 'col-lg-12';

  myBidsDivPane.style.paddingTop = '15px';
  myBidsDivPane.style.paddingBottom = '15px';
  myBidsDivPane.style.paddingLeft = '15px';
  myBidsDivPane.style.border = '1px solid #C6C6C6';
  myBidsDivPane.style.borderRadius = '8px';

  // Add Individual elements to Bids div pane
  // Image Element

  let bidImageElement = returnImageElement(imageSourcePath);
  myBidsDivPane.append(bidImageElement);

  // Bid Content Element

  let bidContent = assetType + " in " + assetColony;
  let bidSubContent = "Current Bid : " + assetCurrentBidPrice;

  let bidContentDivPane = returnMyBidsContentDivPane(bidContent, bidSubContent);

  myBidsDivPane.append(bidContentDivPane);

  // Bid Status element

  let bidStatusDivPane = returnMyBidsStatusDivPane(assetStatus);
  myBidsDivPane.append(bidStatusDivPane);

  return myBidsDivPane;

}


function returnImageElement( imageSourcePath : string ) : any {

  let myBidImageDivElement = document.createElement('div');

  myBidImageDivElement.className = 'col-lg-2';

  let myBidImageElement = document.createElement('img');

  myBidImageElement.src = imageSourcePath;

  myBidImageElement.style.borderRadius = '8px';
  myBidImageElement.style.border = '1px';
  myBidImageElement.style.width = '75%';
  myBidImageElement.style.height = '18%';

  myBidImageDivElement.append(myBidImageElement);

  return myBidImageDivElement;

}

function returnMyBidsContentDivPane( BidsContent : string, BidsSubContent : string ) : any {

  let myBidsDivPane = document.createElement('div');

  myBidsDivPane.className = 'col-lg-8';

  myBidsDivPane.style.paddingTop = '10px';
  myBidsDivPane.style.paddingBottom = '10px';

  let currentTextHeadingNode = returnBidsContent(BidsContent);
  myBidsDivPane.append(currentTextHeadingNode);

  let currentTextSubHeadingNode = returnBidsSubContent(BidsSubContent);
  myBidsDivPane.append(currentTextSubHeadingNode);

  return myBidsDivPane;

}

function returnBidsContent( bidsContentHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(bidsContentHeading);

  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '700';
  currentHeadingDivNode.style.fontStyle = 'Bold';
  currentHeadingDivNode.style.fontSize = '16px';
  currentHeadingDivNode.style.lineHeight = '24px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#292524';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}

function returnBidsSubContent( bidsContetSubHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(bidsContetSubHeading);

  currentHeadingDivNode.style.paddingTop = '5px';
  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '400';
  currentHeadingDivNode.style.fontStyle = 'Regular';
  currentHeadingDivNode.style.fontSize = '12px';
  currentHeadingDivNode.style.lineHeight = '18px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#57534E';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}


function returnMyBidsStatusDivPane( bidStatus : string ) : any {

  let myBidsDivPane = document.createElement('div');

  myBidsDivPane.className = 'col-lg-2';

  myBidsDivPane.style.paddingTop = '20px';
  myBidsDivPane.style.paddingBottom = '20px';


  let bidStatusButtonNode = document.createElement('button');
  bidStatusButtonNode.innerHTML = bidStatus;

  bidStatusButtonNode.style.paddingTop = '5px';
  bidStatusButtonNode.style.paddingBottom = '5px';
  bidStatusButtonNode.style.paddingLeft = '15px';
  bidStatusButtonNode.style.paddingRight = '15px';

  bidStatusButtonNode.style.fontFamily = 'Poppins';
  bidStatusButtonNode.style.fontWeight = '400';
  bidStatusButtonNode.style.fontStyle = 'Regular';
  bidStatusButtonNode.style.fontSize = '12px';
  bidStatusButtonNode.style.lineHeight = '18px';
  bidStatusButtonNode.style.verticalAlign = 'middle';
  bidStatusButtonNode.style.borderRadius = '30px';

  if( bidStatus.toLocaleLowerCase() === 'open' )
  {
    bidStatusButtonNode.style.backgroundColor = '#0EA5E9';
    bidStatusButtonNode.style.border = '1px solid #0EA5E9';
  }
  else
  {
    bidStatusButtonNode.style.backgroundColor = '#ff4f00';
    bidStatusButtonNode.style.border = '1px solid #ff4f00';
  }
  bidStatusButtonNode.style.color = '#FFFFFF';

  myBidsDivPane.append(bidStatusButtonNode);

  return myBidsDivPane;

}


/********************************************************************************************************************

My Auctions Div Pane

********************************************************************************************************************/


export function renderMyAuctionsPane( customerAuctionsResponse : Array<{[index : string] : any}> ) {

  console.log("CustomerDashboard : renderMyAuctionsPane => " + customerAuctionsResponse.length );

  // Remove all the children from Auctions&auctions Plane

  removeAllChildrenFromAuctionsBidsPane();

  // My Auctions heading
  
  let myAuctionsDivElement : any = returnAuctionsAndBidsDivPane("My Auctions", "Track all your auctions and their current status");
  myAuctionsDivElement.append(returnMyAuctionsHeadingDivPane());

  // Add My Auctions as Children

  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  console.log("CustomerDashboard : auctionsAndBidsDivPane => " + auctionsAndBidsDivPane );

  for( let i = 0 ; i < customerAuctionsResponse.length; i++ )
  {

    let myAuctionsAndauctionsBufferDivPane = document.createElement('div');

    myAuctionsAndauctionsBufferDivPane.className = 'col-lg-12';

    myAuctionsAndauctionsBufferDivPane.style.height = '20px';

    myAuctionsDivElement.append(myAuctionsAndauctionsBufferDivPane);
    let myIndiAuctionDivElement : any = returnIndividualAuctionDivPane(customerAuctionsResponse, i);
    myAuctionsDivElement?.append(myIndiAuctionDivElement);
  }

  auctionsAndBidsDivPane?.append(myAuctionsDivElement);

}

function returnMyAuctionsHeadingDivPane( ) : any {

  let myAuctionsDivPane = document.createElement('div');

  myAuctionsDivPane.className = 'row';

  myAuctionsDivPane.style.paddingTop = '20px';
  myAuctionsDivPane.style.paddingLeft = '10px';

  myAuctionsDivPane.style.fontFamily = 'Inter';
  myAuctionsDivPane.style.fontWeight = '400';
  myAuctionsDivPane.style.fontStyle = 'Regular';
  myAuctionsDivPane.style.fontSize = '16px';
  myAuctionsDivPane.style.lineHeight = '24px';
  myAuctionsDivPane.style.verticalAlign = 'middle';
  myAuctionsDivPane.style.color = '#7C736A';

  myAuctionsDivPane.append(returnAuctionsHeadingSubContentNode('Auction', 'col-lg-4'));
  myAuctionsDivPane.append(returnAuctionsHeadingSubContentNode('Base Price'));
  myAuctionsDivPane.append(returnAuctionsHeadingSubContentNode('Current Bid'));
  myAuctionsDivPane.append(returnAuctionsHeadingSubContentNode('Status'));
  myAuctionsDivPane.append(returnAuctionsHeadingSubContentNode('Actions'));
  
  return myAuctionsDivPane;

}

function returnAuctionsHeadingSubContentNode(nodeInnerHtml : string, nodeClassName : string = 'col-lg-2')
{

  let myAuctionsDivSubContent = document.createElement('div');

  myAuctionsDivSubContent.className = nodeClassName;
  myAuctionsDivSubContent.innerHTML = nodeInnerHtml;

  myAuctionsDivSubContent.style.paddingLeft = '50px';

  return myAuctionsDivSubContent;

}

function returnIndividualAuctionDivPane( auctionDetailsResponse : Array<{[index : string] : any}>, auctionIndex : any ) : any {

  console.log("assetId = " + auctionDetailsResponse[auctionIndex].AssetId);
  
  let assetType = auctionDetailsResponse[auctionIndex].AssetType;
  let assetColony = auctionDetailsResponse[auctionIndex].Colony;
  let assetCity = auctionDetailsResponse[auctionIndex].City;
  let assetState = auctionDetailsResponse[auctionIndex].State;
  let assetMinAuctionPrice = auctionDetailsResponse[auctionIndex].MinAuctionPrice;
  let assetCurrentBidPrice = auctionDetailsResponse[auctionIndex].CurrentBidPrice;
  let assetId = auctionDetailsResponse[auctionIndex].AssetId;
  let imageSourcePath = httpImagesRequestURLPrefix + "asset_" + assetId + "_file_0.jpg";
  let assetStatus = auctionDetailsResponse[auctionIndex].Status;

  console.log("Image Source Path = " + imageSourcePath);
  
  let myAuctionsDivPane = document.createElement('div');

  myAuctionsDivPane.className = 'col-lg-12';

  myAuctionsDivPane.style.paddingTop = '15px';
  myAuctionsDivPane.style.paddingBottom = '15px';
  myAuctionsDivPane.style.paddingLeft = '15px';
  myAuctionsDivPane.style.border = '1px solid #C6C6C6';
  myAuctionsDivPane.style.borderRadius = '8px';

  // Add Individual elements to auctions div pane
  // Image Element

  let auctionImageElement = returnImageElement(imageSourcePath);
  myAuctionsDivPane.append(auctionImageElement);

  // auction Content Element

  let auctionContent = assetType + " in " + assetColony;
  let auctionSubContent = assetCity + " , " + assetState;

  let auctionContentDivPane = returnMyauctionsContentDivPane(auctionContent, auctionSubContent);

  myAuctionsDivPane.append(auctionContentDivPane);

  // Auction Base Price

  let auctionBasePrice = returnAuctionsBasePrice(assetMinAuctionPrice);
  myAuctionsDivPane.append(auctionBasePrice);

  // Auction Current Bid Price

  let auctionCurrentBidPrice = returnAuctionsCurrentBidPrice(assetCurrentBidPrice);
  myAuctionsDivPane.append(auctionCurrentBidPrice);

  // Auction Status element

  let auctionStatusDivPane = returnMyAuctionsStatusDivPane(assetStatus);
  myAuctionsDivPane.append(auctionStatusDivPane);

  // Auction Actions : Close Auction / Modify / Delete

  if ( assetStatus.toLocaleLowerCase() == 'open' )
  {
    let closeAuctionDivPane = returnCloseAuctionDivPane(assetCurrentBidPrice, assetId, auctionDetailsResponse, auctionIndex);
    myAuctionsDivPane.append(closeAuctionDivPane);
  }

  return myAuctionsDivPane;

}


function returnMyauctionsContentDivPane( auctionsContent : string, auctionsSubContent : string ) : any {

  let myAuctionsDivPane = document.createElement('div');

  myAuctionsDivPane.className = 'col-lg-2';

  myAuctionsDivPane.style.paddingTop = '10px';
  myAuctionsDivPane.style.paddingBottom = '10px';

  let currentTextHeadingNode = returnauctionsContent(auctionsContent);
  myAuctionsDivPane.append(currentTextHeadingNode);

  let currentTextSubHeadingNode = returnauctionsSubContent(auctionsSubContent);
  myAuctionsDivPane.append(currentTextSubHeadingNode);

  return myAuctionsDivPane;

}

function returnauctionsContent( auctionsContentHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(auctionsContentHeading);

  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '700';
  currentHeadingDivNode.style.fontStyle = 'Bold';
  currentHeadingDivNode.style.fontSize = '16px';
  currentHeadingDivNode.style.lineHeight = '24px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#292524';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}

function returnauctionsSubContent( auctionsContetSubHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(auctionsContetSubHeading);

  currentHeadingDivNode.style.paddingTop = '5px';
  currentHeadingDivNode.style.fontFamily = 'Poppins';
  currentHeadingDivNode.style.fontWeight = '400';
  currentHeadingDivNode.style.fontStyle = 'Regular';
  currentHeadingDivNode.style.fontSize = '12px';
  currentHeadingDivNode.style.lineHeight = '18px';
  currentHeadingDivNode.style.verticalAlign = 'middle';
  currentHeadingDivNode.style.color = '#57534E';

  currentHeadingDivNode.append(currentTextContent);

  return currentHeadingDivNode;

}


function returnAuctionsBasePrice( auctionBasePrice : string ) : any {

  let currentAuctionBasePriceDiv = document.createElement('div');
  currentAuctionBasePriceDiv.innerHTML = '&#8377;' + auctionBasePrice;

  currentAuctionBasePriceDiv.className = 'col-lg-2';

  currentAuctionBasePriceDiv.style.paddingLeft = '50px';
  currentAuctionBasePriceDiv.style.paddingTop = '25px';

  currentAuctionBasePriceDiv.style.fontFamily = 'Poppins';
  currentAuctionBasePriceDiv.style.fontWeight = '400';
  currentAuctionBasePriceDiv.style.fontStyle = 'Regular';
  currentAuctionBasePriceDiv.style.fontSize = '14px';
  currentAuctionBasePriceDiv.style.lineHeight = '21px';
  currentAuctionBasePriceDiv.style.verticalAlign = 'middle';
  currentAuctionBasePriceDiv.style.color = '#464039';

  return currentAuctionBasePriceDiv;

}


function returnAuctionsCurrentBidPrice( auctionCurrentBidPrice : string ) : any {

  let currentAuctionCurrentBidPriceDiv = document.createElement('div');
  currentAuctionCurrentBidPriceDiv.innerHTML = '&#8377;' + auctionCurrentBidPrice;

  currentAuctionCurrentBidPriceDiv.className = 'col-lg-2';

  currentAuctionCurrentBidPriceDiv.style.paddingLeft = '60px';
  currentAuctionCurrentBidPriceDiv.style.paddingTop = '25px';

  currentAuctionCurrentBidPriceDiv.style.fontFamily = 'Poppins';
  currentAuctionCurrentBidPriceDiv.style.fontWeight = '400';
  currentAuctionCurrentBidPriceDiv.style.fontStyle = 'Regular';
  currentAuctionCurrentBidPriceDiv.style.fontSize = '14px';
  currentAuctionCurrentBidPriceDiv.style.lineHeight = '21px';
  currentAuctionCurrentBidPriceDiv.style.verticalAlign = 'middle';
  currentAuctionCurrentBidPriceDiv.style.color = '#0EA5E9';

  return currentAuctionCurrentBidPriceDiv;

}


function returnMyAuctionsStatusDivPane( auctionStatus : string ) : any {

  let myAuctionsDivPane = document.createElement('div');

  myAuctionsDivPane.className = 'col-lg-2';

  myAuctionsDivPane.style.paddingTop = '20px';
  myAuctionsDivPane.style.paddingBottom = '20px';
  myAuctionsDivPane.style.paddingLeft = '54px';


  let auctionStatusButtonNode = document.createElement('button');
  auctionStatusButtonNode.innerHTML = ( auctionStatus.toLocaleLowerCase() == 'open' ) ? 'Open' : 'Closed';

  auctionStatusButtonNode.style.paddingTop = '5px';
  auctionStatusButtonNode.style.paddingBottom = '5px';
  auctionStatusButtonNode.style.paddingLeft = '20px';
  auctionStatusButtonNode.style.paddingRight = '20px';

  auctionStatusButtonNode.style.fontFamily = 'Poppins';
  auctionStatusButtonNode.style.fontWeight = '500';
  auctionStatusButtonNode.style.fontStyle = 'Bold';
  auctionStatusButtonNode.style.fontSize = '12px';
  auctionStatusButtonNode.style.lineHeight = '18px';
  auctionStatusButtonNode.style.verticalAlign = 'middle';
  auctionStatusButtonNode.style.borderRadius = '30px';

  if( auctionStatus.toLocaleLowerCase() === 'open' )
  {
    auctionStatusButtonNode.style.backgroundColor = '#654321';
    auctionStatusButtonNode.style.border = '1px solid #654321';
  }
  else
  {
    auctionStatusButtonNode.style.backgroundColor = '#ff4f00';
    auctionStatusButtonNode.style.border = '1px solid #ff4f00';
  }
  auctionStatusButtonNode.style.color = '#ffffff';

  myAuctionsDivPane.append(auctionStatusButtonNode);

  return myAuctionsDivPane;

}


function returnCloseAuctionDivPane( currentBidPrice : string, assetId: number, 
  assetDetailsResponse : { [index : string] : any}, auctionIndex : number ) : any {

  let myAuctionsDivPane = document.createElement('div');

  myAuctionsDivPane.className = 'col-lg-2';

  myAuctionsDivPane.style.paddingTop = '20px';
  myAuctionsDivPane.style.paddingBottom = '20px';
  myAuctionsDivPane.style.paddingLeft = '54px';

  let closeAuctionButtonNode = document.createElement('button');
  closeAuctionButtonNode.innerHTML = "Close Auction";

  closeAuctionButtonNode.onclick = () => closeAuction(currentBidPrice, assetId, assetDetailsResponse, auctionIndex);

  closeAuctionButtonNode.style.paddingTop = '5px';
  closeAuctionButtonNode.style.paddingBottom = '5px';
  closeAuctionButtonNode.style.paddingLeft = '20px';
  closeAuctionButtonNode.style.paddingRight = '20px';

  closeAuctionButtonNode.style.fontFamily = 'Poppins';
  closeAuctionButtonNode.style.fontWeight = '400';
  closeAuctionButtonNode.style.fontStyle = 'Regular';
  closeAuctionButtonNode.style.fontSize = '12px';
  closeAuctionButtonNode.style.lineHeight = '18px';
  closeAuctionButtonNode.style.verticalAlign = 'middle';
  closeAuctionButtonNode.style.borderRadius = '8px';

  closeAuctionButtonNode.style.backgroundColor = '#0EA5E9';
  closeAuctionButtonNode.style.border = '1px solid #0EA5E9';

  closeAuctionButtonNode.style.color = '#FFFFFF';

  myAuctionsDivPane.append(closeAuctionButtonNode);

  return myAuctionsDivPane;

}

