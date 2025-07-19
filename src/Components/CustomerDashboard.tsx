
import { customerAuctionsAndBidsContentCSS, customerAuctionsAndBidsDivCSS, customerDashboardPaneCSS,
  customerAuctionsAndBidsCountCSS,
  customerAuctionsAndBidsNavCSS,
 } from '../StyleSheets/CustomerDashboardSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';

import { httpImagesRequestURLPrefix } from '../HelperUtils/GlobalsForClient';


export function CustomerDashboardPage(props:any) {
  
  return (

    <div>

      <div>
        <HeaderLoggedIn headerName="Customer Dashboard" /> 
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
            <li className='col-lg-3'><a href='#' onClick={renderMyBidsPane}>My Bids</a></li>

          </ul>

        </nav>

      </div>

      <br/>

      <div id = 'id_customer_auctions_bids_div' style={{paddingLeft : '15px'}} onLoad={() => renderMyAuctionsPane(auctionsAndBidResponse.CustomerAuctions)}>

        <img src="http://192.168.0.101:8080/Smart-Bid/AssetImages/ForeverImage.jpg"></img>

      </div>

    </div>

  );
  
}

function removeAllChildrenFromAuctionsBidsPane()
{
  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  while( auctionsAndBidsDivPane?.hasChildNodes() )
  {
    auctionsAndBidsDivPane.removeChild(auctionsAndBidsDivPane.firstChild!);
  }
}


export function renderMyBidsPane() {

  // Remove all the children from Auctions&Bids Plane

  removeAllChildrenFromAuctionsBidsPane();

  // My Bids heading
  
  let myBidsDivElement : any = returnAuctionsAndBidsDivPane("My Bids History", "Track all your bids and their status");

  // Add My Bids as Child

  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  auctionsAndBidsDivPane?.append(myBidsDivElement);

}


export function renderMyAuctionsPane( customerAuctionsResponse : Array<{[index : string] : any}> ) {

  // Remove all the children from Auctions&Bids Plane

  removeAllChildrenFromAuctionsBidsPane();

  // My Auctions heading
  
  let myAuctionsDivElement : any = returnAuctionsAndBidsDivPane("My Auctions", "Track all your auctions and their current status");

  // Add My Auctions as Children

  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

  for( let i = 0 ; i < customerAuctionsResponse.length; i++ )
  {

    let myAuctionsAndBidsBufferDivPane = document.createElement('div');

    myAuctionsAndBidsBufferDivPane.className = 'col-lg-12';

    myAuctionsAndBidsBufferDivPane.style.height = '20px';

    myAuctionsDivElement.append(myAuctionsAndBidsBufferDivPane);
    let myIndiAuctionDivElement : any = returnIndividualAuctionDivPane(customerAuctionsResponse, i);
    myAuctionsDivElement?.append(myIndiAuctionDivElement);
  }

  auctionsAndBidsDivPane?.append(myAuctionsDivElement);

}


function returnAuctionsAndBidsDivPane( auctionAndBidsHeading : string, auctionAndBidsSubHeading : string ) : any {

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


function returnIndividualAuctionDivPane( auctionDetailsResponse : Array<{[index : string] : any}>, auctionIndex : any ) : any {

  console.log("assetId = " + auctionDetailsResponse[auctionIndex].AssetId);
  
  let assetType = auctionDetailsResponse[auctionIndex].AssetType;
  let assetColony = auctionDetailsResponse[auctionIndex].Colony;
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

  // Auction Content Element

  let auctionContent = assetType + " in " + assetColony;
  let auctionSubContent = "Current Bid : " + assetCurrentBidPrice;

  let auctionContentDivPane = returnMyAuctionsContentDivPane(auctionContent, auctionSubContent);

  myAuctionsDivPane.append(auctionContentDivPane);

  // Auction Status element

  let auctionStatusDivPane = returnMyAuctionsStatusDivPane(assetStatus);
  myAuctionsDivPane.append(auctionStatusDivPane);

  return myAuctionsDivPane;

}


function returnImageElement( imageSourcePath : string ) : any {

  let myAuctionImageDivElement = document.createElement('div');

  myAuctionImageDivElement.className = 'col-lg-2';

  let myAuctionImageElement = document.createElement('img');

  myAuctionImageElement.src = imageSourcePath;

  myAuctionImageElement.style.borderRadius = '8px';
  myAuctionImageElement.style.border = '1px';
  myAuctionImageElement.style.width = '75%';
  myAuctionImageElement.style.height = '18%';

  myAuctionImageDivElement.append(myAuctionImageElement);

  return myAuctionImageDivElement;

}

function returnMyAuctionsContentDivPane( auctionsContent : string, auctionsSubContent : string ) : any {

  let myAuctionsAndBidsDivPane = document.createElement('div');

  myAuctionsAndBidsDivPane.className = 'col-lg-8';

  myAuctionsAndBidsDivPane.style.paddingTop = '10px';
  myAuctionsAndBidsDivPane.style.paddingBottom = '10px';

  let currentTextHeadingNode = returnAuctionsContent(auctionsContent);
  myAuctionsAndBidsDivPane.append(currentTextHeadingNode);

  let currentTextSubHeadingNode = returnAuctionsSubContent(auctionsSubContent);
  myAuctionsAndBidsDivPane.append(currentTextSubHeadingNode);

  return myAuctionsAndBidsDivPane;

}

function returnAuctionsContent( auctionAndBidsHeading : string ) : any {

  let currentHeadingDivNode = document.createElement('div');
  let currentTextContent = document.createTextNode(auctionAndBidsHeading);

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

function returnAuctionsSubContent( auctionAndBidsSubHeading : string ) : any {

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


function returnMyAuctionsStatusDivPane( auctionStatus : string ) : any {

  let myAuctionsAndBidsDivPane = document.createElement('div');

  myAuctionsAndBidsDivPane.className = 'col-lg-2';

  myAuctionsAndBidsDivPane.style.paddingTop = '20px';
  myAuctionsAndBidsDivPane.style.paddingBottom = '20px';


  let auctionStatusButtonNode = document.createElement('button');
  auctionStatusButtonNode.innerHTML = auctionStatus;

  auctionStatusButtonNode.style.paddingTop = '5px';
  auctionStatusButtonNode.style.paddingBottom = '5px';
  auctionStatusButtonNode.style.paddingLeft = '15px';
  auctionStatusButtonNode.style.paddingRight = '15px';

  auctionStatusButtonNode.style.fontFamily = 'Poppins';
  auctionStatusButtonNode.style.fontWeight = '400';
  auctionStatusButtonNode.style.fontStyle = 'Regular';
  auctionStatusButtonNode.style.fontSize = '12px';
  auctionStatusButtonNode.style.lineHeight = '18px';
  auctionStatusButtonNode.style.verticalAlign = 'middle';
  auctionStatusButtonNode.style.borderRadius = '30px';

  if( auctionStatus.toLocaleLowerCase() === 'open' )
  {
    auctionStatusButtonNode.style.backgroundColor = '#0EA5E9';
    auctionStatusButtonNode.style.border = '1px solid #0EA5E9';
  }
  else
  {
    auctionStatusButtonNode.style.backgroundColor = '#ff4f00';
    auctionStatusButtonNode.style.border = '1px solid #ff4f00';
  }
  auctionStatusButtonNode.style.color = '#FFFFFF';

  myAuctionsAndBidsDivPane.append(auctionStatusButtonNode);

  return myAuctionsAndBidsDivPane;

}

