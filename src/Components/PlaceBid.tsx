
import { loadHomePage } from '../ClientCode/Home';
import { backToDashboardButtonCSS, backToDashboardPaddingCSS, placeBidDisplayContentDivCSS, placeBidPaneCSS, imageFileDivCSS, 
  contentHeadingDivCSS, contentLocationDivCSS, bedAndBathDivCSS, descriptionDivCSS, descriptionContentDivCSS,
  contactSellerButtonCSS,
  contactSellerDivCSS,
  openBiddingButtonCSS,
  biddingStatusDivCSS,
  biddingStatusContentCSS,
  activeContentCSS,
  basePriceContentCSS,
  basePriceValueCSS,
  currentBidValueCSS,
  quickBidContentCSS,
  textInputCSS,
  placeBidButtonCSS, 
  placeQuickBidTermsCSS} from '../StyleSheets/PlaceBidSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';

import { httpImagesRequestURLPrefix } from '../HelperUtils/GlobalsForClient';


export function PlaceBidPage() {
  
  return (

    <div>

      <div>
        <HeaderLoggedIn headerName="Place Bid" /> 
      </div>

      <div className='row' style={{width:"99%"}}>

        <div className='col-lg-2'>
        </div>

        <div className='col-lg-8' style={placeBidPaneCSS}>

          <PlaceBidPane />

        </div>

        <div className='col-lg-2'>
        </div>

      </div>

    </div>

  );
  
}

export function PlaceBidPane() {
  
  let assetType = 'Flat';
  let assetColony = 'Masjid Banda';
  let assetCity = 'Hyderabad';
  let assetState = 'Telangana';
  let assetAuctionPrice = '10000000';
  let assetBedRooms = '4';
  let assetBathRooms = '3';
  let assetSize = '200 Sq Yards';
  let assetBuiltupArea = '2000 SFT';
  let assetCurrentBidPrice = '12500000';
  let assetId = 21;
  let imageSourcePath = httpImagesRequestURLPrefix + "asset_" + assetId + "_file_0.jpg";
  let assetDescription = "Beautiful flat in Masjid Banda for Auction. Has lots of common amenities like zym, swimming pool, play court etc.";

  console.log("Image Source Path = " + imageSourcePath);
  
  return (

    <div>

      <div style={{paddingLeft:'5px'}}>

        <BackToDashboard />

      </div>

      <div>

        <div className="col-lg-8" style={placeBidDisplayContentDivCSS}> 

          <img src={imageSourcePath} style={imageFileDivCSS}></img>

          <div className = 'row'>

            <div className = 'col-lg-9' style={contentHeadingDivCSS}>{assetType} in {assetColony}</div>

            <div className = 'col-lg-3' style={contactSellerDivCSS}>

              <button style={contactSellerButtonCSS}>contact seller</button>

            </div>

          </div>
          
          <div style={contentLocationDivCSS}>{assetCity} , {assetState}</div>

          <div className="row" style={bedAndBathDivCSS}>
            
            <div className = 'col-lg-3'>{assetBedRooms} Beds</div>
            <div className = 'col-lg-3'>{assetBathRooms} Baths</div>
            <div className = 'col-lg-3'>{assetSize}</div>
            <div className = 'col-lg-3'>{assetBuiltupArea}</div>
            
          </div>

          <div style={descriptionDivCSS}>Description</div>

          <div style={descriptionContentDivCSS}>{assetDescription}</div>

        </div>

        <div className='col-lg-4'>

          <button style={openBiddingButtonCSS}>Open Bidding</button>

          <div style={{paddingTop:'30px'}}>

            <BiddingStatusPane assetAuctionPrice = {assetAuctionPrice} currentBidPrice = {assetCurrentBidPrice} />

          </div>

          <div style={{paddingTop:'30px'}}>

            <QuickBidPane assetAuctionPrice = {assetAuctionPrice} currentBidPrice = {assetCurrentBidPrice} />

          </div>

        </div>

      </div>

    </div>

  );
  
}


export function BackToDashboard() {
  
  return (

    <div>

      <div className='row col-lg-12'>

        <div className='row col-lg-12' style={backToDashboardPaddingCSS}>
          
          <button className="col-lg-4" style={backToDashboardButtonCSS} onClick={loadHomePage}> 
            &larr;&nbsp;&nbsp; Back To Customer Dashboard
          </button>

        </div>

      </div>

      <br/><br/><br/><br/>

    </div>
        
  );
  
}

export function BiddingStatusPane(props : any) {
  
  return (

    <div style={biddingStatusDivCSS}>

      <div style={{paddingLeft:'20px'}} className='row'>
        
        <div className='col-lg-8' style={biddingStatusContentCSS}>Bidding Status</div>
        <div className='col-lg-3' style={activeContentCSS}>Active</div>

      </div>

      <div style={{paddingTop:'15px'}} className='row'>
        
        <div className='col-lg-4'></div>
        <div className='col-lg-4' style={basePriceContentCSS}>Base Price</div>
        <div className='col-lg-4'></div>

      </div>

      <div style={{paddingTop: '4px'}} className='row'>
        
        <div className='col-lg-4'></div>
        <div className='col-lg-4' style={basePriceValueCSS}>&#8377;&nbsp;{props.assetAuctionPrice}</div>
        <div className='col-lg-4'></div>

      </div>

      <div style={{paddingTop:'8px'}} className='row'>
        
        <div className='col-lg-3'></div>
        <div className='col-lg-6' style={basePriceContentCSS}>Current Highest Bid</div>
        <div className='col-lg-3'></div>

      </div>

      <div style={{paddingTop:'4px'}} className='row'>
        
        <div className='col-lg-4'></div>
        <div className='col-lg-4' style={currentBidValueCSS}>&#8377;&nbsp;{props.currentBidPrice}</div>
        <div className='col-lg-4'></div>

      </div>

    </div>
        
  );
  
}

export function QuickBidPane(props : any) {

  let minBidPrice = 'Min Bid : ' + props.currentBidPrice + '+';
  
  return (

    <div style={biddingStatusDivCSS}>

      <div style={{paddingLeft:'20px'}} className='row'>
        
        <div className='col-lg-8' style={quickBidContentCSS}>&#8377;&nbsp;Quick Bid</div>

      </div>

      <div style={{paddingTop:'20px', paddingLeft:'12px'}} className='row'>
        
        <div className='col-lg-12' style={basePriceContentCSS}>Bid Amount</div>

      </div>

      <div style={{paddingTop:'8px', paddingLeft:'36px'}} className='row'>
        
        <input type='text' className='col-lg-10' style={textInputCSS} placeholder= {minBidPrice} />

      </div>


      <div style={{paddingTop:'25px', paddingLeft:'36px'}} className='row'>
        
        <button className="col-lg-10" style={placeBidButtonCSS}>Place Quick Bid</button>

      </div>

      <div style={{paddingTop:'20px', paddingLeft:'36px'}} className='row'>
        
        <p style={placeQuickBidTermsCSS}><span>By placing bid, U agree to </span><span><a>terms & conditions</a></span></p>

      </div>

    </div>
        
  );
  
}

