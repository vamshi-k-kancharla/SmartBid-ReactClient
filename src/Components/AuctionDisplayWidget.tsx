
import { auctionDisplayDivCSS, auctionDisplayContentDivCSS, contentHeadingDivCSS, contentLocationDivCSS, 
  minAuctionDivCSS, minAuctionSpanCSS, bedAndBathDivCSS, currentBidDivCSS, placeBidDivCSS, placeBidButtonCSS,
  imageFileDivCSS } from "../StyleSheets/AuctionDisplayStyleSheet";

import { httpImagesRequestURLPrefix } from "../HelperUtils/GlobalsForClient";
import { loadPlaceBidPage } from "../ClientCode/Home";


export function AuctionDisplayWidget(props: any) {


  let auctionDetailsArrayObject = JSON.parse(props.auctionDetailsResponse);
  let auctionIndex = props.auctionDetailsIndex;

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

  console.log("Image Source Path = " + imageSourcePath);
  
  return (

    <div style={auctionDisplayDivCSS} className="row">

      <div className="col-lg-12" style={auctionDisplayContentDivCSS}> 

        <img src={imageSourcePath} style={imageFileDivCSS}></img>

        <div style={contentHeadingDivCSS}>{assetType} in {assetColony}</div>
        <div style={contentLocationDivCSS}>{assetCity} , {assetState}</div>

        <div style={minAuctionDivCSS}><span style={minAuctionSpanCSS}>Min Auction : </span>&#8377;&nbsp;{assetAuctionPrice}</div>
        
        <div className="row" style={bedAndBathDivCSS}>
          
          <div className = 'col-lg-3'>{assetBedRooms} Beds</div>
          <div className = 'col-lg-3'>{assetBathRooms} Baths</div>
          <div className = 'col-lg-3'>{assetSize}</div>
          <div className = 'col-lg-3'>{assetBuiltupArea}</div>
          
        </div>

        <div style={currentBidDivCSS}><span>Current Bid : </span>&#8377;&nbsp;{assetCurrentBidPrice}</div>

        <div className="row" style={placeBidDivCSS}>

            <button className="col-lg-12" style={placeBidButtonCSS} onClick={loadPlaceBidPage}>Place Bid</button>

        </div>

      </div>

    </div>

  );
  
}


export function AuctionDisplayWidgetHomePage(props: any) {

  return (

    <div>

      <div style={auctionDisplayDivCSS} className="row">

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {0} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {1} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {2} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {3} />

        </div>

      </div>

      <div style={auctionDisplayDivCSS} className="row">

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {4} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {5} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {6} />

        </div>

        <div className="col-lg-3" style={auctionDisplayContentDivCSS}> 

          <AuctionDisplayWidget auctionDetailsResponse = {props.auctionDetailsResponse} auctionDetailsIndex = {7} />

        </div>

      </div>

    </div>

  );
        
}