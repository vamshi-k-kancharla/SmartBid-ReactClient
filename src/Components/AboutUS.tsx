
import { httpImagesRequestURLPrefix } from "../HelperUtils/GlobalsForClient";
import { aboutUSHeadingCSS, aboutUSImageCSS, founderImageCSS, founderNameTitleCSS, ourStoryContentCSS, ourStoryDivCSS, ourStoryHeadingCSS } from "../StyleSheets/AboutUSSheet";


export function AboutUSPage() {

  let aboutUSContent = "We are alumni & current employees of Microsoft, Wipro, Mind Tree & Elastic search " +
                "forming the group together to build an online auction platform for real estate assets in order to serve the " +
                "real estate community.";

  let aboutUSContent2 = "We all are basically from Hyderabad and are passionate about real estate Sector with couple of us in the group " +
                "being builders constructing Villas & Apartments in Hyderabad.";

  let aboutUSContent3 = "We are building an online auction platform for builders, sellers, agents and buyers to collaborate " +
                ", bid for the property and close the deal upon auction price agreement.";

  let aboutUsImageSource = httpImagesRequestURLPrefix + "RenderingImages/AboutUS.jpg";

  let vamshiImageSource = httpImagesRequestURLPrefix + "FoundersImages/Vamshi.jpg";
  let srinivasImageSource = httpImagesRequestURLPrefix + "FoundersImages/Srinivas.jpg";
  let harshaImageSource = httpImagesRequestURLPrefix + "FoundersImages/Harsha.jpg";
  let santoshImageSource = httpImagesRequestURLPrefix + "FoundersImages/Santosh.jpg";

  return (

    <div>

      <div className="row">

        <div className='col-lg-1'></div>

        <div className="col-lg-10">

          <div style={aboutUSHeadingCSS}>About US</div>

          <br/><br/>

          <div style={ourStoryDivCSS} >

            <div className="row">

              <div className='col-lg-7'>

                <div style={ourStoryHeadingCSS}>Our Story</div>

                <p style={ourStoryContentCSS}>{aboutUSContent}</p>
                <p style={ourStoryContentCSS}>{aboutUSContent2}</p>
                <p style={ourStoryContentCSS}>{aboutUSContent3}</p>

              </div>

              <div className='col-lg-5'>

                <img src={aboutUsImageSource} style={aboutUSImageCSS}></img>

              </div>

            </div>

            <br/>

            <div style={ourStoryHeadingCSS}>Our Partners</div>

            <div className='row'>

              <div className="col-lg-3">

                <img src={vamshiImageSource} style={founderImageCSS}></img>
                <div style={founderNameTitleCSS}>Vamshi Krishna Kancharla</div>
                <div style={founderNameTitleCSS}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founder & CEO</div>

              </div>

              <div className="col-lg-3">

                <img src={srinivasImageSource} style={founderImageCSS}></img>
                <div style={founderNameTitleCSS}>Srinivas Reddy Repala</div>
                <div style={founderNameTitleCSS}>&nbsp;Director, UX Design</div>

              </div>

              <div className="col-lg-3">

                <img src={harshaImageSource} style={founderImageCSS}></img>
                <div style={founderNameTitleCSS}>Harshavardhan Gajibimker</div>
                <div style={founderNameTitleCSS}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Director, Marketing</div>

              </div>

              <div className="col-lg-3">

                <img src={santoshImageSource} style={founderImageCSS}></img>
                <div style={founderNameTitleCSS}>Santosh Reddy Gaddam</div>
                <div style={founderNameTitleCSS}>&nbsp;&nbsp;&nbsp;&nbsp;Director, Operations</div>

              </div>

            </div>

          </div>

        </div>

        <div className='col-lg-1'></div>
      
      </div>

    </div>

  );
  
}

