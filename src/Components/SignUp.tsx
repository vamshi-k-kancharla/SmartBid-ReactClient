
import { loadLoginPage } from '../ClientCode/Home';
import { leftPaneCSS, rightPaneCSS, smartCSS, bidCSS, getStartedCSS, discoverCSS, allInOneCSS, formLabelCSS, formLabelMustCSS, textInputDivCSS, textInputCSS } from '../StyleSheets/SignUpStyleSheet';

export function SignUpPage() {
  
  return (

    <div>

      <div className='row'>

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

      <form onSubmit={loadLoginPage}>

          <div className="row">

              <p className="col-lg-6 text-left" style={formLabelCSS}>Name <span style={formLabelMustCSS}>*</span></p>
              <p className="col-lg-6 text-left" style={formLabelCSS}>Phone Number <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-6" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Full Name" id="id_name"/>

              </div>

              <div  className="col-lg-6" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Phone Number" id="id_phone_number"/>
          
              </div>

          </div>

          <br/>

          <div className="row">

              <p className="col-lg-12 text-left" style={formLabelCSS}>Email <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-12" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter Email" id="id_email"/>

              </div>

          </div>

          <br/>

          <div className="row">

              <p className="col-lg-12 text-left" style={formLabelCSS}>User Type <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-12" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Select User Type" id="id_user_type"/>

              </div>
          
          </div>

          <br/>

          <div className="row">

              <p className="col-lg-4 text-left" style={formLabelCSS}>Country <span style={formLabelMustCSS}>*</span></p>
              <p className="col-lg-4 text-left" style={formLabelCSS}>State <span style={formLabelMustCSS}>*</span></p>
              <p className="col-lg-4 text-left" style={formLabelCSS}>City <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-4" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Select A Country" id="id_country"/>

              </div>

              <div  className="col-lg-4" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Select a state" id="id_state"/>
          
              </div>

              <div  className="col-lg-4" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Select a city" id="id_city"/>
          
              </div>

          </div>

          <br/>

          <div className="row">

              <p className="col-lg-12 text-left" style={formLabelCSS}>Address <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-12" style={textInputDivCSS}>
  
                <input type="text" className="col-lg-12" style={textInputCSS} placeholder="Enter the full address" id="id_address"/>

              </div>
          
          </div>

          <br/>

          <div className="row">

              <p className="col-lg-6 text-left" style={formLabelCSS}>Password <span style={formLabelMustCSS}>*</span></p>
              <p className="col-lg-6 text-left" style={formLabelCSS}>Reenter Password <span style={formLabelMustCSS}>*</span></p>
          
          </div>

          <div className="row">

              <div  className="col-lg-6" style={textInputDivCSS}>
  
                <input type="password" className="col-lg-12" style={textInputCSS} placeholder="Enter Password" id="id_password"/>

              </div>

              <div  className="col-lg-6" style={textInputDivCSS}>
  
                <input type="password" className="col-lg-12" style={textInputCSS} placeholder="Re-Enter Password" id="id_password_reentry"/>
          
              </div>

          </div>

          <br/><br/>

          <div className="row">

              <button type="submit" className="btn btn-primary align-middle col-lg-12 border-primary-subtle">Create An Account</button>

          </div>

          <br/><br/>

          <div className="row">

              <button type="button" className="btn col-lg-6">Login using Google</button>
              <button type="button" className="btn col-lg-6">Login using Apple</button>

          </div>

          <br/><br/>

          <div>

            <div className='col-lg-4'> </div> 
            <p>Already have an Account ? <span> <a href="#"> Login Here </a></span> </p>
            <div className='col-lg-4'> </div> 

          </div>

      </form>

    </div>

  );
  
}
