import React from 'react';
import Footer from '../components/footer';
import img1 from "../assets/core/bene.svg";
import img2 from "../assets/core/required.svg";
import img3 from "../assets/core/goverment.svg";
import img4 from "../assets/core/eligi.svg";
import MSMEAL from '../components/msmeapply';
import {Helmet} from "react-helmet";
const MSME = (props) => {

  return (
   <React.Fragment>
   <Helmet>
     <title>MSME Registration | Cretic Solutions</title>
      <meta name="keywords" content="MSME Registration, Enrollment for MSME, New MSME Registration, MSME Portal Access,MSME Registration Online, MSME Registration Status, MSME Registration Fees" />
      <meta name="description" content="Ministry of Micro, Small & Medium Enterprises (M/o MSME) envision a vibrant ... For MSME Udyam Registration"/>
    </Helmet>
    <div class="pt_banner_inner-mod">
    <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <div class="before_title">
                      <span>Affordable for </span>
                      <span class="c-red">Micro, Small and Medium Enterprises</span>
                    </div>
                    <h2>
                       Get your <span class="c-red">MSME Registration</span> to avail various benefits
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <br/>
      <div className="section__showcase margin-b-6">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5">
             
            </div>
          </div>
          <div className="block__tab">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-budget-tab" data-toggle="pill" href="#pills-budget" role="tab" aria-controls="pills-budget" aria-selected="true">
                  <div className="icon">
                    <img class="img-fluid" src={img1} alt="Benefits" />
			  
	           </div>
                  <h3>Benefits of MSME Registration</h3>
                  <div className="prog" />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-create-tab" data-toggle="pill" href="#pills-create" role="tab" aria-controls="pills-create" aria-selected="false">
                  <div className="icon">
                    <img class="img-fluid" src={img2} alt="Required" />
                  </div>
                  <h3>Information Required for MSME</h3>
                  <div className="prog" />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-view-tab" data-toggle="pill" href="#pills-view" role="tab" aria-controls="pills-view" aria-selected="false">
                  <div className="icon">
                    <img class="img-fluid" src={img3} alt="Required" />
					</div>
                  <h3>MSME schemes launched by the Govt</h3>
                  <div className="prog" />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-integ-tab" data-toggle="pill" href="#pills-integ" role="tab" aria-controls="pills-integ" aria-selected="false">
                  <div className="icon">
                    <img class="img-fluid" src={img4} alt="MSME" />
	          </div>
                  <h3>MSME/Udyog Aadhaar Eligibility</h3>
                  <div className="prog" />
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-budget" role="tabpanel" aria-labelledby="pills-budget-tab">
                <div className="ss_software">
                  <ol type="1">
                  <li>Due to the MSME Registration, the bank loans become cheaper as the interest rate is very low around ~ 1 to 1.5%. Much lower than interest on regular loans.</li>
                  <li>It also allowed credit for minimum alternate tax (MAT) to be carried forward for up to 15 years instead of 10 years</li>
                  <li>Once registered the cost getting a patent done, or the cost of setting up the industry reduces as many rebates and concessions are available.</li>
                  <li>MSME registration helps to acquire government tenders easily as Udyam Registration Portal is integrated with Government e-Marketplace and various other State Government portals which give easy access to their marketplace and e-tenders.</li>
                  <li>There is a One Time Settlement Fee for non-paid amounts of MSME.</li>
                  </ol>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-create" role="tabpanel" aria-labelledby="pills-create-tab">
                <div className="ss_software">
                  <p>Aadhaar Card is the only document required for MSME registration. MSME registration is fully online and no proof of documents is required. PAN and GST linked details on investment and turnover of enterprises will be taken automatically by the Udyam Registration Portal from the Government databases. The Udyam Registration Portal is fully integrated with Income Tax and GSTIN systems. PAN and GSTIN number is mandatory from 01.04.2021 for registration. Registration without PAN and GSTIN can be done now but have to be updated with PAN number and GSTIN number within 01/04/2021 for avoiding suspension of registration. Those who have EM-II or UAM registration or any other registration issued by any authority under the Ministry of MSME, will have to re-register themselves in this Portal (as stated in the Registration Process heading above)</p>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-view" role="tabpanel" aria-labelledby="pills-view-tab">
                <div className="row">
                   <div class="container">
                       <h4>Technology And Quality Upgradation Scheme:</h4>
                       <p>Registering in this scheme will help the micro, small and medium enterprises to use energy efficient technologies (EETs) in manufacturing units so as to reduce the cost of production and adopt a clean development mechanism.</p>
                   </div>
                   <div class="container">
                      <h4>Grievance Monitoring System:</h4>
                      <p>Registering under this scheme is beneficial in terms of getting the complaints of the business owners addressed. In this, the business owners can check the status of their complaints, open them if they are not satisfied with the outcome.</p>
                   </div>
                   <div class="container">
                      <h4>Credit Linked Capital Subsidy Scheme:</h4>
                      <p>Under this scheme, new technology is provided to the business owners to replace their old and obsolete technology. A capital subsidy is given to the business to upgrade and have better means to do their business. These small, micro and medium enterprises can directly approach the banks for these subsidies.</p>
                   </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-integ" role="tabpanel" aria-labelledby="pills-integ-tab">
           <div class="row">
          <div class="col-md-8 offset-md-2 table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Classification</th>
                  <th scope="col">Manufacturing Sector</th>
                  <th scope="col">Service Sector</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Micro Enterprise</td>
                  <td>Upto Rs. 25 lakhs investment in plant & machinery</td>
                  <td>Upto Rs. 10 lakhs investment in equipment</td>
                </tr>
                <tr>
                  <td>Small Enterprise</td>
                  <td>Upto Rs.5 crore investment in plant & machinery</td>
                  <td>Upto Rs.2 crores investment in equipment</td>
                </tr>
                <tr>
                  <td>Medium Enterprise</td>
                  <td>Upto Rs.10 crore investment in plant & machinery</td>
                  <td>Upto Rs.5 crores investment in equipment</td>
                </tr>
              
              </tbody>
            </table>
            
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MSMEAL/>
   <div className="pricing_section padding-b-15 margin-b-15">
        <div className="container">
          <div className="row justify-content-md-center">

          </div>
          <div className="blocks_pricing" id="monthly">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="item__price">
                  <div className="logo_price">
                    <div className="icon_gif">
                      <img className="gif" src="../../assets/img/gif/partying_face.gif" alt="basic plan" />
                    </div>
                  </div>
                  <h4 className="name_p">Basic</h4>
                  <div className="number">
                    <span className="n_price">₹299</span>
                    <span className="coins">.00</span>
                    <span className="d-block per">all inclusive fees</span>
                  </div>
                  <p className="info_price">
                    Entire Process Will Be Done in Same Day
                  </p>
                  <div className="feature_price">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                       MSME Registration
                       </li>
                    </ul>
                    <a href="https://rzp.io/l/PzbqNVg" type="button" className="btn effect-letter scale rounded-pill btn_md_primary c-white bg-blue">
                      Order Now!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="item__price popular">
                  <img className="icon_popular" src="../../assets/img/popular.svg" alt="Premium Plan" />
                  <div className="logo_price">
                    <div className="icon_gif">
                      <img className="gif" src="../../assets/img/gif/nerd_face.gif" alt="premium" />
                    </div>
                  </div>
                  <h4 className="name_p">Premium</h4>
                  <div className="number">
                    <span className="n_price">₹1499</span>
                    <span className="coins">.00</span>
                    <span className="d-block per">all inclusive fees</span>
                  </div>
                  <p className="info_price">
                    Entire Process Will Be Done in Same Day
                  </p>
                  <div className="feature_price">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        GST Registration
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        Udyam Registration
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        GST Billing Software
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        Current Account Opening*
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        3Months Free GST Filing
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        Free GST Support
                      </li>
                    </ul>
                    <a href="https://rzp.io/l/GIL4Dcs" type="button" className="btn effect-letter scale rounded-pill btn_md_primary c-white bg-yollow">
                       Order Now!
                       </a>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="item__price">
                  <div className="logo_price">
                    <div className="icon_gif">
                      <img className="gif" src="../../assets/img/gif/smiling_face_with_sunglasses.gif" alt="Standard"/>
                    </div>
                  </div>
                  <h4 className="name_p">Standard</h4>
                  <div className="number">
                    <span className="n_price">₹799</span>
                    <span className="coins">.00</span>
                    <span className="d-block per">all inclusive fees</span>
                  </div>
                  <p className="info_price">
                    Entire Process Will Be Done in Same Day
                  </p>
                  <div className="feature_price">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        GST Registration
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        Udyam Registration
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                   1Month Free GST Filing
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        Curreun ccountt Opening*
                      </li>
                      <li className="list-group-item">
                        <i className="tio checkmark_circle_outlined" />
                        GST Billing Software
                      </li>
                    </ul>
                     <a href="https://rzp.io/l/HYXqmSLe" type="button" className="btn scale effect-letter rounded-pill btn_md_primary c-white bg-orange-red">
                      Order Now!
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    <Footer/>
   </React.Fragment>
  );
}

export default MSME;
