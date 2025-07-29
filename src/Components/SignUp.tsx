
import { leftPaneCSS, rightPaneCSS, smartCSS, bidCSS, getStartedCSS, discoverCSS, allInOneCSS, formLabelCSS, formLabelMustCSS, 
  textInputDivCSS, textInputCSS, submitButtonCSS, submitButtonDivCSS, googleButtonCSS, appleButtonCSS, loginAnchorCSS, 
  cancelButtonSignUpCSS,
  submitCancelDivCSS} 
  from '../StyleSheets/SignUpStyleSheet';
import { submitSignUpDetails } from '../ClientCode/SignUp';
import { loadHomePage } from '../ClientCode/Home';

export function SignUpPage() {
  
  return (

    <div>

      <div className='row' style={{width:"99%"}}>

        <div className='col-lg-5' style={leftPaneCSS}>

          <SignUpLeftPane />

        </div>

        <div className='col-lg-7' style={rightPaneCSS}>

          <SignUpRightPane />

        </div>

      </div>

    </div>

  );
  
}

export function SignUpLeftPane() {
  
  return (

    <div>

      <div style={{paddingLeft:'100px', paddingBottom:'15px'}}> 
        
        <p> <span style={smartCSS}>Smart</span><span style={bidCSS}>Bid</span></p>

      </div>

      <div style={getStartedCSS}>Get Started With</div>

      <div style={getStartedCSS}>Real Estate Auction</div>

      <div style={discoverCSS}>Discover, List & Close Property deals</div>

      <div style={allInOneCSS}>all in one platform.</div>

    </div>

  );
  
}

export function SignUpRightPane() {
  
  return (

    <div>

      <form onSubmit={(event) => submitSignUpDetails(event)}>

          <div className="row">

              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Name <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Full Name" id="id_name"/>

                </div>
              
              </div>
  
              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Phone Number <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Phone Number" id="id_phone_number"/>

                </div>
              
              </div>
  
          </div>

          <br/>


          <div style={textInputDivCSS}>

            <div className="row">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Email <span style={formLabelMustCSS}>*</span></p>
            
            </div>

            <div className="row">

                <div  className="col-lg-12" style={textInputDivCSS}>
    
                  <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Email" id="id_email"/>

                </div>

            </div>

          </div>

          <br/>


          <div style={textInputDivCSS}>

            <div className="row">

                <p className="col-lg-12 text-left" style={formLabelCSS}>User Type <span style={formLabelMustCSS}>*</span></p>
            
            </div>

            <div className="row">

                <div  className="col-lg-12" style={textInputDivCSS}>
    
                  <select className="col-lg-12" style={textInputCSS} id="id_user_type">

                    <option value = ''>Select User Type</option>
                    <option value = 'Customer'>Customer</option>
                    <option value = 'Agent'>Agent</option>
                    <option value = 'Builder'>Builder</option>

                  </select>

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


          <div style={textInputDivCSS}>

            <div className="row">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Address <span style={formLabelMustCSS}>*</span></p>
            
            </div>

            <div className="row">

                <div  className="col-lg-12" style={textInputDivCSS}>
    
                  <textarea className="col-lg-12" style={textInputCSS} placeholder="Enter the full address" id="id_address"/>

                </div>
            
            </div>

          </div>

          <br/>

          <div className="row">

              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Password <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="password" className="col-lg-12" style={textInputCSS} placeholder="Enter Password" id="id_password"/>

                </div>
              
              </div>
  
              <div  className="col-lg-6">

                <p className="col-lg-12 text-left" style={formLabelCSS}>Reenter Password <span style={formLabelMustCSS}>*</span></p>

                <div style={textInputDivCSS}>

                  <input type="password" className="col-lg-12" style={textInputCSS} placeholder="Re-Enter Password" id="id_password_reentry"/>

                </div>
              
              </div>
  
          </div>

          <br/><br/><br/>

          <div className="row" style={submitButtonDivCSS}>

              <div className='col-lg-6' style={submitCancelDivCSS}>
  
                <button type="submit" className='col-lg-12' style={submitButtonCSS}>Create An Account</button>

              </div>
  
              <div className='col-lg-6' style={submitCancelDivCSS}>
  
                <button className='col-lg-12' style={cancelButtonSignUpCSS} onClick={loadHomePage}>Cancel</button>

              </div>

          </div>

          <br/><br/><br/>

          <div className="row" style={submitButtonDivCSS}>

              <div className='col-lg-6'>

                <button type="button" className="btn col-lg-12" style={googleButtonCSS}>Login using Google</button>

              </div>

              <div className='col-lg-6'>

                <button type="button" className="btn col-lg-12" style={appleButtonCSS}>Login using Apple</button>

              </div>

          </div>

          <br/><br/>

          <div>

            <div className='col-lg-4'> </div>

              <p style={loginAnchorCSS}>Already have an Account ? <span> <a href="#"> Login Here </a></span> </p>

            <div className='col-lg-4'> </div> 

          </div>

      </form>

    </div>

  );
  
}
