
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
  placeQuickBidTermsCSS,
  contactSellerDialogCSS,
  contactSellerCloseButtonCSS,
  contactSellerModalHeadingCSS,
  contactSellerModalBodyContentCSS,
  contactSellerModalLabelCSS,
  contactSellerModalDetailCSS,
  contactSellerModalBodyCSS,
  contactSellerHeaderFooterCSS} from '../StyleSheets/PlaceBidSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';

import { httpImagesRequestURLPrefix } from '../HelperUtils/GlobalsForClient';

import { placeQuickBid } from '../ClientCode/PlaceBid';


export function PlaceBidPage(props:any) {
  
  return (

    <div>

      <div>
        <HeaderLoggedIn headerName="Place Bid" /> 
      </div>

      <div className='row' style={{width:"99%"}}>

        <div className='col-lg-2'>
        </div>

        <div className='col-lg-8' style={placeBidPaneCSS}>

          <PlaceBidPane auctionDetailsResponse = {props.auctionDetailsResponse} auctionIndex = {props.auctionIndex} customerRecord = {props.customerRecord} />

        </div>

        <div className='col-lg-2'>
        </div>

      </div>

    </div>

  );
  
}

export function PlaceBidPane(props:any) {
  
  let auctionDetailsArrayObject = JSON.parse(props.auctionDetailsResponse);
  let auctionIndex = props.auctionIndex;

  let assetType = auctionDetailsArrayObject[auctionIndex].AssetType;
  let assetColony = auctionDetailsArrayObject[auctionIndex].Colony;
  let assetCity = auctionDetailsArrayObject[auctionIndex].City;
  let assetState = auctionDetailsArrayObject[auctionIndex].State;
  let assetAuctionPrice = auctionDetailsArrayObject[auctionIndex].MinAuctionPrice;
  let assetBedRooms = auctionDetailsArrayObject[auctionIndex].AssetBedrooms;
  let assetBathRooms = auctionDetailsArrayObject[auctionIndex].AssetBathrooms;
  let assetSize = auctionDetailsArrayObject[auctionIndex].AssetSize;
  let assetBuiltupArea = auctionDetailsArrayObject[auctionIndex].BuiltUpArea;
  let assetCurrentBidPrice = auctionDetailsArrayObject[auctionIndex].CurrentBidPrice;
  let assetId = auctionDetailsArrayObject[auctionIndex].AssetId;
  let imageSourcePath = httpImagesRequestURLPrefix + "asset_" + assetId + "_file_0.jpg";
  let assetDescription = auctionDetailsArrayObject[auctionIndex].AssetDescription;
  let assetBiddingType = auctionDetailsArrayObject[auctionIndex].BiddingType;
  let sellerCustomerId = auctionDetailsArrayObject[auctionIndex].SellerCustomerId;

  let customerRecordObject = JSON.parse(props.customerRecord)

  let sellerName = customerRecordObject[0].Name;
  let sellerEmailId = customerRecordObject[0].EmailAddress;
  let sellerMobileNumber = customerRecordObject[0].PhoneNumber;

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

              <button style={contactSellerButtonCSS} data-toggle="modal" data-target="#contact_seller_modal">contact seller</button>

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

          { ( assetBiddingType == null || assetBiddingType == undefined || assetBiddingType.toLocaleLowerCase() == 'open' ) ? 
            ( <button style={openBiddingButtonCSS}>Open Bidding</button> ) : 
            ( <button style={openBiddingButtonCSS}>Secretive Bidding</button> ) }
          
          <div style={{paddingTop:'30px'}}>

            <BiddingStatusPane assetAuctionPrice = {assetAuctionPrice} currentBidPrice = {assetCurrentBidPrice} assetBiddingType = {assetBiddingType} />

          </div>

          <div style={{paddingTop:'30px'}}>

            <QuickBidPane assetAuctionPrice = {assetAuctionPrice} currentBidPrice = {assetCurrentBidPrice} 
              assetId = {assetId} assetBiddingType = {assetBiddingType} sellerCustomerId = {sellerCustomerId} 
              biddingType = {assetBiddingType} />

          </div>

        </div>

      </div>

      <div id="contact_seller_modal" className="modal fade" style={contactSellerDialogCSS}>

        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header" style={contactSellerHeaderFooterCSS}>

              <div className='row'>

                <div className='col-lg-2'></div>

                <div className='col-lg-5' style={contactSellerModalHeadingCSS}>

                    <p>Seller Contact Details</p>

                </div>

                <div className='col-lg-2'>

                    <button data-dismiss='modal' style={contactSellerCloseButtonCSS}>X</button>

                </div>

              </div>
              
            </div>

            <div className="modal-body" style={contactSellerModalBodyCSS}>

              <div style={contactSellerModalBodyContentCSS}>

                <span style={contactSellerModalLabelCSS}>Name :</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span style={contactSellerModalDetailCSS}>{sellerName}</span>

              </div>

              <div style={contactSellerModalBodyContentCSS}> 
                
                <span style={contactSellerModalLabelCSS}>Phone Number :</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span style={contactSellerModalDetailCSS}>+91-{sellerMobileNumber}</span>
                
              </div>
              
              <div style={contactSellerModalBodyContentCSS}> 
                
                <span style={contactSellerModalLabelCSS}>Email Id :</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span style={contactSellerModalDetailCSS}>{sellerEmailId}</span>

              </div>
              
            </div>

            <div className="modal-footer" style={contactSellerHeaderFooterCSS}>
              
            </div>

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
            &larr;&nbsp;&nbsp; Back To Home Page
          </button>

        </div>

      </div>

      <br/><br/><br/><br/>

    </div>
        
  );
  
}

export function BiddingStatusPane(props : any) {

  let assetCurrentBiddingPrice = ( props.assetBiddingType == null || props.assetBiddingType == undefined || 
    props.assetBiddingType.toLocaleLowerCase() == 'open' ) ? ( props.currentBidPrice ) : "**********";
  
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
        { ( props.assetBiddingType == null || props.assetBiddingType == undefined || 
              props.assetBiddingType.toLocaleLowerCase() == 'open' ) ? 
        ( <div className='col-lg-4' style={currentBidValueCSS}>&#8377;&nbsp;{assetCurrentBiddingPrice}</div> ) : 
        ( <div className='col-lg-4' style={currentBidValueCSS}>{assetCurrentBiddingPrice}</div> ) }
        <div className='col-lg-4'></div>

      </div>

    </div>
        
  );
  
}

export function QuickBidPane(props : any) {

  let minBidPrice = ( props.assetBiddingType == null || props.assetBiddingType == undefined || 
              props.assetBiddingType.toLocaleLowerCase() == 'open' ) ? props.currentBidPrice : props.assetAuctionPrice;
  let minBidPriceContent = 'Min Bid : ' + minBidPrice + '+';
  
  return (

    <div style={biddingStatusDivCSS}>

      <div style={{paddingLeft:'20px'}} className='row'>
        
        <div className='col-lg-8' style={quickBidContentCSS}>&#8377;&nbsp;Quick Bid</div>

      </div>

      <div style={{paddingTop:'20px', paddingLeft:'12px'}} className='row'>
        
        <div className='col-lg-12' style={basePriceContentCSS}>Bid Amount</div>

      </div>

      <div style={{paddingTop:'8px', paddingLeft:'36px'}} className='row'>
        
        <input type='text' className='col-lg-10' style={textInputCSS} id="id_quick_bid" placeholder= {minBidPriceContent} />

      </div>


      <div style={{paddingTop:'25px', paddingLeft:'36px'}} className='row'>
        
        <button className="col-lg-10" style={placeBidButtonCSS} onClick={() => placeQuickBid(minBidPrice, props.assetId, props.sellerCustomerId, props.biddingType)}>Place Quick Bid</button>

      </div>

      <div style={{paddingTop:'20px', paddingLeft:'36px'}} className='row'>
        
        <p style={placeQuickBidTermsCSS}><span>By placing bid, U agree to </span><span><a>terms & conditions</a></span></p>

      </div>

    </div>
        
  );
  
}

