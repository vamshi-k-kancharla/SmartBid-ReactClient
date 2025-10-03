
import { loadHomePage } from "../ClientCode/Home";
import { aboutUSHeadingCSS, ourStoryDivCSS } from "../StyleSheets/AboutUSSheet";
import { agreeButtonCSS, termsAndConditionsCSS } from "../StyleSheets/TermsAndConditionsSheet";

export function TermsAndConditionsPage() {

  let aboutUSContent1 = "1. SFAMEBID LLP offers online biding platform for price agreement of the real estate asserts through the process of Biding by buyer and seller. Bidders compete against one another and the highest bidder receives the items for sale.";
  let aboutUSContent2 = "2. SFAMEBID LLP shall disclose minimum auction price of a property and asks bidders to level up the price for price agreement and doesn’t exhibit maximum price of the property to open the door of the negotiation starting from the minimum price to proceed upwards to close down the maximum price agreed upon by the buyer.";
  let aboutUSContent3 = "3. SFAMEBID LLP website portal do not indulge any offline auction in any bidding auction but provide platform for online property only through e- auction.";

  let aboutUSContent4 = "4. The details of e-auction shall be sent to email of customers who are duly registered in the system prior to the contemplated auction which has been uploaded by SFAMEBID LLP in the website. Any wrong information from the bidders would make them black listed.";
  let aboutUSContent5 = "5. SFAMEBID LLP shall not be held responsible for any power, network, server, hosting server, internet connectivity, ISP failure or otherwise at bidder’s end.";
  let aboutUSContent6 = "6. SFAMEBID LLP takes no responsibility of the quality, quantity, documentation details of buyers and sellers.";

  let aboutUSContent7 = "7. SFAMEBID LLP is presently offering property purchase transactions through SFAMEBID LLP portal/ app and advice the buyers and sellers to confine the ultimate sale registration offline at the office of the sub register.";
  let aboutUSContent8 = "8. SFAMEBID LLP has no knowledge base of the Real estate asserts under transaction by both the parties who agree that the commodities so transferred should not violate any applicable laws of India.";
  let aboutUSContent9 = "9. SFAME Bid LLP is only an online bidding platform and is no way party to the transaction. They cannot be held responsible for any void/ voidable transactions between the seller and the bidder. Bidders shall Soley be responsible for any problem arising out of their wrongful bids. It is the responsibility of the bidders to keep a valid email address failing which the service provider shall not be responsible for non-receipt of email messages from service providers. It is the customer sole duty to verify the status of the bids and pay total material value accordingly. The terms and conditions of the contract between the seller and the bidder which appear on the day of the auction are final and should be downloaded by then.";

  let aboutUSContent10 = "10. In case of unforeseen circumstances, beyond the control of the management of service provider/seller, the auction may be extended/postponed.";
  let aboutUSContent11 = "11. Bidding service provided by SFAMEBID LLP are totally unbiased, treating all the bidders at par without discriminating them. SFAMEBID LLP portal enables the seller to take a decision on the auction to come upon the closure price choosing the final bidder based on the highest bid price.";
  let aboutUSContent12 = "12. SFAMEBID LLP charge commission on percentage basis on the price of the property transaction upon the closure of the auction. The amount of commission has to be credited to SFAMEBID LLP account by the seller.";

  let aboutUSContent13 = "13. SFAMEBID LLP provide the seller contact details to the bidder free of cost to enable them to contact the seller and check the property placed on the bidding platform.";
  let aboutUSContent14 = "14. SFAMEBID LLP provides three free bids for opting their services and thereafter membership fee would be charged against the bidders who have the option to go for the higher number of bids.";
  let aboutUSContent15 = "15. SFame Bid LLP provides premium services on special membership fee for unlimited biddings.";

  let aboutUSContent16 = "16. Each customer is provided with limited number of e-auction by SFAMEBID LLP. Separate membership fee is charged to opting for publishing unlimited listing/options through SFAMEBID LLP web app/service.";
  let aboutUSContent17 = "17. Membership fees are charged by SFAMEBID LLP to customer who wants to verify the contact details of the bidder of their choice furnishing the bidding history of each auction of the seller.";
  let aboutUSContent18 = "18. SFAMEBID LLP have initially chosen to close the auction based on highest bidding price irrespective of bidder’s details.";

  let aboutUSContent19 = "19. SFAMEBID LLP gives the liberty upon the seller to determine the time for the closure of the auction, till the highest bidding price is opted. The auction can be performed either by the seller himself. In case of appointment of auctioneer by the seller, the seller has to pay.";
  let aboutUSContent20 = "20. Once the bidding is accepted by the seller by the fall of a gavel or by any other audible or visible to signify the bidder that the bidder entitled to the property on payment of the bid price with no participant to bid further, the auction ends for that particular property. Once the bid is accepted the seller has no right to accept a higher bid, nor a buyer can with draw the buyers bid and thus a binding contract gets created in the auction enabling the seller to set a reserve price.";
  let aboutUSContent21 = "21. SFAMEBID LLP ensures free and fair competition among the bidders to bring the highest financial bidders into the platform. The sellers are cautioned not to indulge in collusion to coordinate the bids between the seller which renders the auction void and advised to desist from any agreement that restricts the free competition which is against the public policy and is fraudulent in nature.";

  let aboutUSContent22 = "22. The Seller can with draw the property from the auction before the dropping of the gavel if the bidding is too low and auctioneer or seller need not sell the property.";
  let aboutUSContent23 = "23. The rules determining the winning bidders can also differ. SFAMEBID LLP endeavors to cater auction as per the requirement of the parties. The identities and actions of the participant may be opened showing the minimum and latest auction price in open bidding or may not be disclosed to others or kept secret disclosing only the minimum auction price in secret bidding.";
  let aboutUSContent24 = "24. SFAMEBID LLP stores authentication details of the customer in Hash Format and other details in carefully preserved text format.";

  let aboutUSContent25 = "25. SFAMEBID LLP offers third party seller to the buyer to secure loan for the purchase of Real estate asserts in auction with nominal charges to the sole discretion of the buyer without involving themselves in the loan process.";
  let aboutUSContent26 = "26. SFAMEBID LLP strives to mark those sellers who drop off from the auction, after the auction is placed and closed. later they get banned from the system after a couple of such drops off.";
  let aboutUSContent27 = "27. If the bidder drops out after winning the auction, SFAMEBID LLP marks those Bidders who drop off from the auction after the auction won and later, they get banned from the system after a couple of such drops off.";

  return (

    <div>

      <div className="row">

        <div className='col-lg-1'></div>

        <div className="col-lg-10">

          <div style={aboutUSHeadingCSS}>Terms & Conditions</div>

          <br/><br/>

          <div style={ourStoryDivCSS} >

            <div className="row">

              <div className='col-lg-12'>

                <p style={termsAndConditionsCSS}>{aboutUSContent1}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent2}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent3}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent4}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent5}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent6}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent7}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent8}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent9}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent10}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent11}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent12}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent13}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent14}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent15}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent16}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent17}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent18}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent19}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent20}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent21}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent22}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent23}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent24}</p>

                <p style={termsAndConditionsCSS}>{aboutUSContent25}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent26}</p>
                <p style={termsAndConditionsCSS}>{aboutUSContent27}</p>

              </div>

            </div>

            <br/>

          </div>

        </div>

        <div className='col-lg-1'></div>

      </div>

      <br/>
      <br/>
      
      <div className="row">

        <div className='col-lg-5'></div>

        <div className='col-lg-2'>

          <button style={agreeButtonCSS} onClick={loadHomePage}>I Agree</button>

        </div>

        <div className='col-lg-5'></div>

      </div>

    </div>

  );
  
}

