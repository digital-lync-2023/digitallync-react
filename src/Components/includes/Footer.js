import React from "react";
import {Link} from 'react-router-dom';
import Phonebtn from "./Phonebtn"; 
 
function Footer() {

  return (

    <>
       <div id="get_trained" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">
          ×
        </button>
        <h4 className="modal-title">Get Skilled</h4>
      </div>
      <div className="modal-body">
        <div
          id="crmWebToEntityForm"
          className="zcwf_lblLeft crmWebToEntityForm"
          style={{ backgroundColor: "white", color: "black", maxWidth: 600 }}
        >
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
          <form
            action="https://crm.zoho.in/crm/WebToLeadForm"
            name="WebToLeads217508000000808025"
            method="POST" 
            acceptCharset="UTF-8"
          >
            <input
              type="text" required
              style={{ display: "none" }}
              name="xnQsjsdp"
              defaultValue="48a1f9c03dd46a45124498c2a83d038954bf37df69bacdc10cdbff64804d37f3"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
            <input
              type="text" required
              style={{ display: "none" }}
              name="xmIwtLD"
              defaultValue="c840e33c1d03ffeb06c5301e6bc51b5e8cc7e1a262593d1f4f81b2ba0502cc73"
            />
            <input
              type="text" required
              style={{ display: "none" }}
              name="actionType"
              defaultValue="TGVhZHM="
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="returnURL"
              defaultValue="https://www.digital-lync.com/thank-you.html"
            />
            {/* Do not remove this code. */}
            <style
              dangerouslySetInnerHTML={{
                __html: "\n    .modal-dialog {\n    max-width: 400px;\n}\n  "
              }}
            />
            <div className="zcwf_row">
              <div
                className="zcwf_col_lab"
                style={{ fontSize: 12, fontFamily: "Arial" }}
              >
                <label htmlFor="Last_Name">
                  Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input required
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  maxLength={80}
                />
                <div className="zcwf_col_help" />
              </div>
            </div>
            <div className="zcwf_row">
              <div
                className="zcwf_col_lab"
                style={{ fontSize: 12, fontFamily: "Arial" }}
              >
                <label htmlFor="Phone">
                  Phone<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input type="number" id="Phone" name="Phone" maxLength={30} required />
                <div className="zcwf_col_help" />
              </div>
            </div>
            <div className="zcwf_row">
              <div
                className="zcwf_col_lab"
                style={{ fontSize: 12, fontFamily: "Arial" }}
              >
                <label htmlFor="Email">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input
                  type="email"  
                  ftype="email"
                  id="Email"
                  name="Email"
                  maxLength={100} required
                />
                <div className="zcwf_col_help" />
              </div>
            </div>
            <div className="zcwf_row">
              <div className="zcwf_col_lab" />
              <div className="zcwf_col_fld">
                <input
                  type="submit"
                  id="formsubmit"
                  className="formsubmit zcwf_button"
                  defaultValue="Submit"
                  title="Submit"
                />{" "}
              </div>
            </div>
            {/* Do not remove this --- Analytics Tracking code starts */}
            {/* Do not remove this --- Analytics Tracking code ends. */}
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="question-col">
    <div className="container">
      <h2 className="text-white wow fadeInUp animated"> Have a Question? </h2>
      <h6 className="text-white wow fadeInDown animated">
       
        we help you go farther than you ever dreamed, 24/7.{" "}
      </h6>
      <div className="row justify-content-between pt-5">
        <div className="col-lg-3 col-md-5 col-sm-12 text-center contact px-0 wow fadeInUp animated">
          
          <img src="images/india.png" className="img-fluid" alt="Have a Question" />
          <h5 className="poppinsMedium fs18">
          
            <a className="telTo" href="tel:+916304982304">
              +91 6304982304
            </a> 
          </h5>
          <p className="poppinsMedium fs16 haveQuestionColor telTo">India</p>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12 text-center contact px-0 wow fadeInDown animated">
           
          <img src="images/usa.png" className="img-fluid" alt="Have a Question" />
          <h5 className="poppinsMedium fs18">
            
            <a className="telTo" href="tel:+15855013666">
              +1 5855013666
            </a> 
          </h5>
          <p className="poppinsMedium fs16 haveQuestionColor telTo">USA</p>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12 text-center contact px-0 wow fadeInDown animated">
          
          <img src="images/mail.png" className="img-fluid" alt="Have a Question" />
          <h5 className="poppinsMedium fs18">
            <a
              href="mailto:hello@digital-lync.com"
              target="_top"
              className="mailto"
            >
              hello@digital-lync.com
            </a>
          </h5>
          <p className="poppinsMedium fs16 haveQuestionColor telTo">Email</p>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12 text-center contact px-0 wow fadeInUp animated">
         
          <img src="images/live_chat.png" className="img-fluid" alt="Have a Question" />
          <h5 className="fs18 text-white">LIVE CHAT</h5>
          <p className="poppinsMedium fs16 haveQuestionColor telTo">
            LIVE CHAT
          </p>
        </div>
      </div>
    </div>
  </div>
      <div className="locations">
    <div className="container text-center">
      <h2 className="heading-7 wow fadeInUp animated"> Locations </h2>
      <h6 className="heading-8 wow fadeInDown animated">
        
        Come and chat with us about your goals over a cup of coffee 
      </h6>
      <div className="pad_t30">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="card cursorPointer wow fadeInUp animated">
               
              <img
                src="images/hyderabadLocation.jpg"
                className=""
                alt="Locations"
              />
              <div className="card-body">
                <h5 className="">Madhapur - Hyderabad</h5>
                <p className="">
                  2nd Floor, Hitech City Rd, Above Domino's, opp. Cyber Towers,
                  Jai hind Enclave, Hyderabad, Telangana, 06304982304
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <footer className="footer footerwhite">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <Link to="index.html">
                <img
                  src="images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
                  alt="Logo"
                  className="flogo" />
              </Link>
              <div className="social_icons wow fadeInUp animated">
                <p>Follow us on</p>
                <ul>
                  <li className="d-inline-block">
                     
                    <Link
                      to="https://www.facebook.com/digitallync/"
                      className="fs24"
                      target="_blank" >
                      <i className="fa fa-facebook" /> 
                    </Link> 
                  </li>
                  <li className="d-inline-block">
                     
                    <Link
                      to="https://twitter.com/digitallync?lang=en"
                      className="fs24"
                      target="_blank" >
                     
                      <i className="fa fa-twitter" /> 
                    </Link> 
                  </li>
                  <li className="d-inline-block">
                   
                    <Link
                      to="https://www.linkedin.com/company/10702035/admin/"
                      className="fs24"
                      target="_blank" >
                      
                      <i className="fa fa-linkedin" /> 
                    </Link> 
                  </li>
                  <li className="d-inline-block">
                   
                    <Link 
                      to="https://www.instagram.com/_digitallync_/"
                      className="fs24"
                      target="_blank" >
                      
                      <i className="fa fa-instagram" /> 
                    </Link> 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Digital Lync</h5>
              <ul className="fmenu">
                <li>
                
                  <Link to="career.html"> Career Support</Link> 
                </li>
                <li className="onp">
                 
                  <Link to="online-pay.html"> Online Pay</Link> 
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Courses</h5>
              <ul className="fmenu">
                <li>
                  
                  <Link to="full-stack-training-in-hyderabad.html">
                    
                    Full Stack
                  </Link> 
                </li>
                <li>
                  
                  <Link to="aws-training-in-hyderabad.html"> AWS</Link> 
                </li>
                <li>
                  
                  <Link to="python-training-in-hyderabad.html"> Python</Link> 
                </li>
                <li>
                  
                  <Link to="devops-training-in-hyderabad.html"> DevOps</Link> 
                </li>
                <li>
                  
                  <Link to="angular-training-in-hyderabad.html"> Angular</Link> 
                </li>
                <li>
                  
                  <Link to="react-training-in-hyderabad.html"> React Js</Link> 
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Programs</h5>
              <ul className="fmenu">
                <li>
                  
                  <Link to="job-ready-program.html">
                     
                    <strong> Jobready program </strong>
                  </Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
           
          © Copyright Lync Digital School Pvt. Ltd | 2019 |
          <Link to="privacy-policy.html"> Privacy Policy</Link> 
        </div>
      </div>
      <Phonebtn />
    </>


  );



}
 
export default Footer;