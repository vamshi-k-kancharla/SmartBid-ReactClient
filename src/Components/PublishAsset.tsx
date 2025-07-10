
import { loadHomePage } from '../ClientCode/Home';
import { submitAuctionAssetDetails } from '../ClientCode/PublishAsset';
import { publishAssetPaneCSS, formLabelCSS, formLabelMustCSS, textInputCSS, textInputDivCSS, submitButtonCSS, submitButtonDivCSS, cancelButtonCSS, publishAssetHeadingCSS, publishAssetHeading2CSS, uploadImagesCSS, uploadImageTextCSS, uploadImageSelectionCSS, backToDashboardButtonCSS, backToDashboardPaddingCSS } from '../StyleSheets/PublishAssetStyleSheet';

import { HeaderLoggedIn } from './HeaderLoggedIn';

export function PublishAssetPage() {
  
  return (

    <div>

      <div>
        <HeaderLoggedIn headerName="Publish Asset" /> 
      </div>

      <div className='row' style={{width:"99%"}}>

        <div className='col-lg-1'>
        </div>

        <div className='col-lg-10' style={publishAssetPaneCSS}>

          <PublishAssetPane />

        </div>

        <div className='col-lg-1'>
        </div>

      </div>

    </div>

  );
  
}

export function PublishAssetPane() {
  
  return (

    <div>

      <div>
        <BackToDashboard />
      </div>

      <div>
        <PublishAssetHeading />
      </div>

      <form>

          <div style={textInputDivCSS}>

            <div className="row">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Upload Asset Images</p>
            
            </div>

            <div className="row">

                <div className="col-lg-12" style={textInputDivCSS}>
    
                  <div style={uploadImagesCSS}>

                    <p style={uploadImageTextCSS}>Click to upload Asset Images ( max:10 )</p>
                    <input type="file" className="col-lg-12" style={uploadImageSelectionCSS} multiple id="id_files_To_Be_Uploaded"/>

                  </div>

                </div>
            
            </div>

          </div>

          <br/>

          <div className="row">

              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Asset Type <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <select className="col-lg-12" style={textInputCSS} id="id_asset_type">

                    <option value = ''>Select Asset Type</option>
                    <option value = 'Villa'>Villa</option>
                    <option value = 'Plot'>Plot</option>
                    <option value = 'Flat'>Flat</option>
                    <option value = 'Land'>Land</option>
                    <option value = 'Commercial'>Commercial</option>

                  </select>

                </div>

              </div>
  
              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Minimum Auction Price <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Min Auction Price" id="id_min_auction_price"/>

                </div>
              
              </div>
  
          </div>


          <br/>

          <div className="row">

              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Address <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Address" id="id_address"/>

                </div>

              </div>
  
              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Colony/Area <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Colony/Area Name" id="id_colony"/>

                </div>
              
              </div>
  
          </div>

          <br/>

          <div className="row">

              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Country <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <select className="col-lg-12" style={textInputCSS} id="id_country">

                    <option value = ''>Select User Country</option>
                    <option value = 'India'>India</option>

                  </select>

                </div>
              
              </div>
  
              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>State <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <select className="col-lg-12" style={textInputCSS} id="id_state">

                    <option value = ''>Select User State</option>
                    <option value = 'Telangana'>Telangana</option>
                    <option value = 'Andhra Pradesh'>Andhra Pradesh</option>
                    <option value = 'Karnataka'>Karnataka</option>

                  </select>

                </div>
              
              </div>
  
              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>City <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter the City" id="id_city"/>

                </div>
              
              </div>
  
          </div>

          <br/>

          <div className="row">

              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Asset Size</p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Eg: 200 Sq Yards" id="id_asset_size"/>

                </div>
              
              </div>
  
              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Built-Up Area</p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Eg: 1500 Sqft" id="id_built_up_area"/>

                </div>
              
              </div>
  
              <div  className="col-lg-4">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Approval Type</p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter approval type" id="id_approval_type"/>

                </div>
              
              </div>
  
          </div>

          <br/>


          <div style={textInputDivCSS}>

            <div className="row">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Asset Description</p>
            
            </div>

            <div className="row">

                <div  className="col-lg-12" style={textInputDivCSS}>
    
                  <textarea className="col-lg-12" style={textInputCSS} placeholder="Enter the full details of Asset" id="id_asset_description"/>

                </div>
            
            </div>

          </div>

          <br/>

          <div className="row">

              <div className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Number of BedRooms</p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Min No Of Bedrooms" id="id_min_no_of_bedrooms"/>

                </div>
              
              </div>
  
              <div className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Number of Bathrooms</p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Min No Of Bathrooms" id="id_min_no_of_bathrooms"/>

                </div>
              
              </div>
  
          </div>

          <br/><br/><br/>

          <div className="row" style={submitButtonDivCSS}>

              <button type="submit" className="col-lg-3" style={submitButtonCSS} onClick={(event) => submitAuctionAssetDetails(event)}>Publish Asset</button>
              <div className="col-lg-1"></div>
              <button className="col-lg-3" style={cancelButtonCSS} onClick={loadHomePage}>Cancel</button>

          </div>

          <br/><br/>

      </form>

    </div>

  );
  
}


export function PublishAssetHeading() {
  
  return (

    <div>

      <div className='row col-lg-12'>

        <div className='row col-lg-12'>
          
          <p className="col-lg-12"> 
            <span style={publishAssetHeadingCSS}>Publish New Assets</span>
          </p>

        </div>

        <div className='row col-lg-12'>
          
          <p className="col-lg-12"> 
            <span style={publishAssetHeading2CSS}>Add new asset details to publish for auction</span>
          </p>
          
        </div>

      </div>

      <br/><br/><br/><br/>

    </div>
        
  );
  
}


export function BackToDashboard() {
  
  return (

    <div>

      <div className='row col-lg-12'>

        <div className='row col-lg-12' style={backToDashboardPaddingCSS}>
          
          <button className="col-lg-3" style={backToDashboardButtonCSS} onClick={loadHomePage}> 
            &larr;&nbsp;&nbsp; Back To Customer Dashboard
          </button>

        </div>

      </div>

      <br/><br/><br/><br/>

    </div>
        
  );
  
}

