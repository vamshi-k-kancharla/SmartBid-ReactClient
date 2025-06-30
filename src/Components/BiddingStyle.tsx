
import {firstDivCSS, chooseCSS, sellerControlCSS, openBiddingCSS, secretiveBiddingCSS, openHeadingCSS, secretiveHeadingCSS, openSubHeadingCSS, openSubHeading2CSS, openListItemsCSS} from '../StyleSheets/BiddingStyleSheet';

export function BiddingStyle() {
  
  return (

    <div style={{paddingLeft:'1%'}}>

      <div style={firstDivCSS}>

        <div className='row'>

          <div className='col-lg-4'></div>        
          <div style={chooseCSS} className='col-lg-4'> Choose Your Bidding Style </div>

        </div>

        <div className='row'>

          <div className='col-lg-4'></div>        
          <div style={sellerControlCSS} className='col-lg-4'> Sellers can control their auction experience </div>

        </div>

        <br></br>
        <br></br>

        <div className='row'>

          <div className='col-lg-2'></div>        

          <div className='col-lg-4' style={{padding:'15px'}}>

            <div style={openBiddingCSS}>  

              <div style={openHeadingCSS}>Open Bidding</div>

              <br></br>

              <div style={openSubHeadingCSS}>Transparent bidding where all participants can see</div>
              <div style={openSubHeading2CSS}>current bids and compete openly.</div>

              <br></br>

              <ul style={openListItemsCSS}>

                <li>Real-time bid visibility </li>
                <li>Competitive atmosphere</li>
                <li>Market-driven pricing</li>
                <li>Full Transparency</li>

              </ul>

              <br></br>

            </div>

          </div>

          <div className='col-lg-4' style={{padding:'15px'}}>  

            <div style={secretiveBiddingCSS}>

              <div style={secretiveHeadingCSS}>Secretive Bidding</div>

              <br></br>

              <div style={openSubHeadingCSS}>Private bidding where participants submit sealed bids</div>
              <div style={openSubHeading2CSS}>without seeing other's offers.</div>

              <br></br>

              <ul style={openListItemsCSS}>

                <li>Sealed bid submissions</li>
                <li>Strategic bidding</li>
                <li>Privacy protection</li>
                <li>Surprise outcomes</li>

              </ul>

              <br></br>

            </div>

          </div>

        </div>
        
      </div>

    </div>

  );
  
}
