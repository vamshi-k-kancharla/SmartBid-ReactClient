
import { customerAuctionsAndBidsContentCSS, customerAuctionsAndBidsDivCSS, customerDashboardPaneCSS,
  customerAuctionsAndBidsCountCSS,
  customerAuctionsAndBidsNavCSS,
 } from '../StyleSheets/CustomerDashboardSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';


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

            <li className='col-lg-3'><a href='#' onClick={renderMyAuctionsPane}>My Auctions</a></li>
            <li className='col-lg-3'><a href='#' onClick={renderMyBidsPane}>My Bids</a></li>

          </ul>

        </nav>

      </div>

      <br/>

      <div id = 'id_customer_auctions_bids_div' style={{paddingLeft : '15px'}} onLoad={renderMyAuctionsPane}>

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


export function renderMyAuctionsPane() {

  // Remove all the children from Auctions&Bids Plane

  removeAllChildrenFromAuctionsBidsPane();

  // My Auctions heading
  
  let myAuctionsDivElement : any = returnAuctionsAndBidsDivPane("My Auctions", "Track all your auctions and their current status");

  // Add My Auctions as Children

  let auctionsAndBidsDivPane = document.getElementById("id_customer_auctions_bids_div");

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


