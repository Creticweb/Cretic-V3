import React from 'react';
import GSTREG from '../components/gstreg';
import GSTFAQ from '../components/gstfaq';
import Footer from "../components/footer";
import gstin from "../assets/core/gst.svg";
import comp from "../assets/core/compliances.svg";
import {Helmet} from "react-helmet";

const GSTServices = (props) => {

  return (
   <React.Fragment>
   <Helmet>
     <title>GST Registration | Cretic Solutions</title>
      <meta name="keywords" content="GST Registration, Enrollment for GST, New GST Registration, GST Portal Access,GST Registration Online, GST Registration Status, GST Registration Fees" />
      <meta name="description" content="GST Registration -  Know the GST Registration Online Process, eligibility and documents required for GST Registration . Secure GSTIN number with the help of experts on the applicability and compliances under GST for your business and get your business Registered under GST."/>
    </Helmet>
    <div class="pt_banner_inner-mod">
    <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <div class="before_title">
                      <span>Affordable Packages </span>
                      <span class="c-red">for Small Businesses</span>
                    </div>
                    <h2>
                       How Does <span class="c-red">GST Registration</span> Work For You ?
                    </h2>
                  </div>
                </div>
              </div>
            </div>
		</div>
		<br/>
      <div className="services_section text-center gsb_serv_ig margin-b-6">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-6 col-lg-4 mb-3 mb-lg-0 padding-r-5">
                <div class="items_serv sevice_block">
                  <div class="icon--top">
                    <img src={gstin} alt="GSTIN" />
                  </div>
                  <div class="txt">
                    <h3>GSTIN</h3>
                    <p>
                      We help you get a Secure GST Identification Number.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
                <div class="items_serv sevice_block">
                  <div class="icon--top">
                    <img src="../../assets/img/icons/sofa.svg" alt="" />
                  </div>
                  <div class="txt">
                    <h3>Service</h3>
                    <p>
                      We make it easy for you to get your GST from the comfort of your own home.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="items_serv sevice_block">
                  <div class="icon--top">
                    <img src={comp} alt="Compliances" />
                  </div>
                  <div class="txt">
                    <h3>Compliances</h3>
                    <p>
                      We will file your returns and complete all other compliances as and when required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <GSTREG/>
	  <br/>
	  <GSTFAQ/>
	  <div class="container">
	    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <h3>
                       GST General <span class="c-red">Questions</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
	   <div class="faq_one_inner py-0 mt-0 margin-b-6 w-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="faq_section faq_demo3 faq_with_icon">
                  <div class="block_faq">
                    <div class="accordion" id="accordionExample">
                      <div class="card">
                        <div class="card-header active" id="headingOne">
                          <h3 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                              aria-expanded="true" aria-controls="collapseOne">
                              How to get GST certificate?
                            </button>
                          </h3>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                          data-parent="#accordionExample">
                          <div class="card-body">
                            <p class="mb-0">
                              GST certificate is provided in soft copy format by Govt. of India. After the allotment
							  of GSTIN, GST certificate can be downloaded from the GST portal at anytime by the 
							  applicant.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <h3 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo"
                              aria-expanded="false" aria-controls="collapseTwo">
                              What are the penalties for not registering under GST?
                            </button>
                          </h3>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                          data-parent="#accordionExample">
                          <div class="card-body">
                            <p>
                              IN case of delay in GST filing, the penalty of Rs. 200/- is charged per day. There is 
							  no late fee charged in IGST.WhenGST Return is not filed, then 10% of the due tax will 
							  be the penalty amount or Rs. 10000, whichever is earlier.Whensomeone commits fraud, 
							  then there will be a penalty which is 100% of the due tax or Rs. 10000 – whichever is 
							  earlier.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingThree">
                          <h3 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What documents are required as a Place of Business proof?
                            </button>
                          </h3>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                          data-parent="#accordionExample">
                          <div class="card-body">
                            <p>
                              We require the copy of electricity bill or NOC from the landlord in case of rented 
							  place. NOC format will be share by our company during registration process.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingFour">
                          <h3 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse"
                              data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              How do I have to send my documents to Cretic Solutions
                            </button>
                          </h3>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                          data-parent="#accordionExample">
                          <div class="card-body">
                            <p>
                              We accept documents over e-mail and whatsapp. Don’t worry, we have a 100% confidential 
							  policy and once the job is done, we will delete the documents from our system.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div class="creative_box_contact padding-t-12">
          <div class="container">
            <div class="content">
              <div class="row justify-content-center text-center">
                <div class="col-lg-5">
                  <div class="title_sections_inner margin-b-4">
                    <h2 class="c-white" data-aos="fade-up" data-aos-delay="0">GST Registration Online</h2>
                    <p class="c-light" data-aos="fade-up" data-aos-delay="100">GST is the product of the biggest tax 
					reform in India which has tremendously improved ease of doing business and increasing the taxpayer
					 base in India by including millions of small businesses.</p>
                  </div>
                  <a href="/contact" class="btn btn_xl_primary bg-red c-white rounded-8" data-aos="fade-up"
                    data-aos-delay="200">Contact us with a request</a>
                </div>
              </div>
            </div>

          </div>
        </div>

	  <Footer/>
    </React.Fragment>
  );
}

export default GSTServices;