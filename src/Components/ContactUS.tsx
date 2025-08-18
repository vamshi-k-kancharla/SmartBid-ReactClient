
import { submitContactUSFeedback } from "../ClientCode/ContactUS";
import { httpImagesRequestURLPrefix, mobileNumberContactUS, notificationEmailAddress } from "../HelperUtils/GlobalsForClient";
import { contactInfoContentCSS, contactInfoHeadingCSS, contactInfoImageCSS, getInTouchContentCSS, getInTouchDivCSS, getInTouchHeadingCSS, inputTextAreaContactUSCSS, inputTextBoxContactUSCSS, sendMessageSubmitButtonCSS } from "../StyleSheets/ContactUSSheet";


export function ContactUSPage() {

  let contactUSContent = "We'd love to hear from you. Drop us a message and we will get back to you as soon as possible.";

  let emailImageSource = httpImagesRequestURLPrefix + "RenderingImages/contactus-email.jpg";
  let whatsappImageSource = httpImagesRequestURLPrefix + "RenderingImages/contactus-whatsapp.jpg";
  let phoneImageSource = httpImagesRequestURLPrefix + "RenderingImages/contactus-phone.jpg";

  return (

    <div className="row">

      <div className="col-lg-1"></div>

      <div className="row col-lg-10">

        <div className='col-lg-7' style={getInTouchDivCSS}>

          <p style={getInTouchHeadingCSS}>Get in Touch</p>

          <p style={getInTouchContentCSS}>{contactUSContent}</p>

          <form>

            <div style={{paddingBottom : '70px'}}>

              <input type="text" placeholder="Your Name" className="col-lg-10" style={inputTextBoxContactUSCSS} id="id_name"/>

            </div>

            <div style={{paddingBottom : '70px'}}>

              <input type="email" placeholder="Your Email" className="col-lg-10" style={inputTextBoxContactUSCSS} id="id_email"/>

            </div>

            <div style={{paddingBottom : '70px'}}>

              <input type="text" placeholder="Subject" className="col-lg-10" style={inputTextBoxContactUSCSS} id="id_subject"/>

            </div>

            <div style={{paddingBottom : '70px'}}>

              <textarea placeholder="Your Message" className="col-lg-10" style={inputTextAreaContactUSCSS} id="id_message"></textarea>

            </div>

            <div style={{paddingBottom : '70px', paddingTop : '70px'}}>

              <button type="submit" className="col-lg-10" style={sendMessageSubmitButtonCSS} id="id_sendMessage" onClick={(event) => submitContactUSFeedback(event)}>Send Message</button>

            </div>

          </form>

        </div>

        <div className='col-lg-1'></div>

        <div className='col-lg-4' style={getInTouchDivCSS}>


          <p style={getInTouchHeadingCSS}>Contact Information</p>


          <div style={{paddingBottom : '30px', paddingTop: '20px'}} className="row">

            <div className="col-lg-1">

              <img src={emailImageSource} style={contactInfoImageCSS}></img>

            </div>
            
            <div className="col-lg-11" style={{paddingLeft:'60px'}}>

              <p style={contactInfoHeadingCSS}>Email</p>
              <p style={contactInfoContentCSS}>{notificationEmailAddress}</p>

            </div>
            
          </div>


          <div style={{paddingBottom : '30px'}} className="row">

            <div className="col-lg-1">

              <img src={whatsappImageSource} style={contactInfoImageCSS}></img>

            </div>
            
            <div className="col-lg-11" style={{paddingLeft:'60px'}}>

              <p style={contactInfoHeadingCSS}>Whatsapp</p>
              <p style={contactInfoContentCSS}>{mobileNumberContactUS}</p>

            </div>
            
          </div>


          <div style={{paddingBottom : '30px'}} className="row">

            <div className="col-lg-1">

              <img src={phoneImageSource} style={contactInfoImageCSS}></img>

            </div>
            
            <div className="col-lg-11" style={{paddingLeft:'60px'}}>

              <p style={contactInfoHeadingCSS}>Phone</p>
              <p style={contactInfoContentCSS}>{mobileNumberContactUS}</p>

            </div>
            
          </div>


        </div>

      </div>

      <div className="col-lg-1"></div>

    </div>

  );
  
}

