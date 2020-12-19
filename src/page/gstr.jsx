import React from 'react';
import GSTRP from "../components/gstrp";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const GSTR = (props) => {

  return (
    <React.Fragment>
    <Helmet>
     <title>GST Monthly Return Filing Service</title>
    </Helmet>
    <div class="pt_banner_inner-mod">
    <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <h2>
                       Affordable <span class="c-red">GST Monthly</span> Filing Service
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
		  <div class="services_section service_four fitures_Appfitness h-100">
          <div class="container">
            <div class="features_bb">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-6 col-lg-4 item">
                      <div class="items_serv sevice_block">
                        <div class="icon--top gradient_orange">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_6445" data-name="Group 6445" transform="translate(-3 -2)">
                              <path id="Path-75" d="M5,15,3,21.5l6.5-2Z" fill="#fd7028" fill-rule="evenodd"
                                opacity="0.3" />
                              <path id="Combined-Shape"
                                d="M13,2A10,10,0,1,1,3,12,10,10,0,0,1,13,2ZM7.168,13.555A6.862,6.862,0,0,0,13,17a6.862,6.862,0,0,0,5.832-3.445,1,1,0,1,0-1.664-1.109A4.894,4.894,0,0,1,13,15a4.894,4.894,0,0,1-4.168-2.555,1,1,0,1,0-1.664,1.109Z"
                                fill="#fd7028" fill-rule="evenodd" />
                            </g>
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>STEP 1</h3>
                          <p>
                            Email all purchase & sales invoice in a separate folder. You can also send data in Excel
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                      <div class="items_serv sevice_block">
                        <div class="icon--top gradient_blue">
                          <svg id="Stockholm-icons-_-General-_-Notification_2"
                            data-name="Stockholm-icons-/-General-/-Notification#2" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                            <rect id="bound" width="24" height="24" fill="none" />
                            <path id="Combined-Shape"
                              d="M13.207,4A5.5,5.5,0,0,0,20,10.793V17a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4Z"
                              fill="#165df5" fill-rule="evenodd" />
                            <circle id="Oval" cx="2.5" cy="2.5" r="2.5" transform="translate(16 3)" fill="#165df5"
                              opacity="0.3" />
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>STEP 2</h3>
                          <p>
                            Make payment online using Credit / Debit Card , Bank Transfer GPay, PayTm etc
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                      <div class="items_serv sevice_block">
                        <div class="icon--top gradient_green">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                            <g id="Group_6446" data-name="Group 6446" transform="translate(0 -3)">
                              <path id="Combined-Shape"
                                d="M18,14a3,3,0,1,1,3-3A3,3,0,0,1,18,14ZM9,11a4,4,0,1,1,4-4A4,4,0,0,1,9,11Z"
                                fill="#31d1ab" opacity="0.3" />
                              <path id="Combined-Shape-2" data-name="Combined-Shape"
                                d="M17.6,15c3.407.037,6.188,1.76,6.4,5.4a.51.51,0,0,1-.543.6H19.6A9.956,9.956,0,0,0,17.6,15ZM0,20.2C.388,15.427,4.262,13,8.983,13,13.771,13,17.7,15.293,18,20.2a.687.687,0,0,1-.751.8H.728A1.107,1.107,0,0,1,0,20.2Z"
                                fill="#31d1ab" />
                            </g>
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>STEP 3</h3>
                          <p>
                            Data Submission & Filing  GSTR 1 & 3  Filing report will be mailed to you.
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
		<br/>
        <GSTRP/>
		<br/>
		 <div class="creative_box_contact padding-t-12">
          <div class="container">
            <div class="content">
              <div class="row justify-content-center text-center">
                <div class="col-lg-5">
                  <div class="title_sections_inner margin-b-4">
                    <h2 class="c-white" data-aos="fade-up" data-aos-delay="0">Still need help?</h2>
                    <p class="c-light" data-aos="fade-up" data-aos-delay="100">Click on the blue round button at the bottom right corner of this page. 
					You can also email our support team at <a class="c-green2" href="mailto:creticweb@gmail.com">creticweb@gmail.com</a>.</p>
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

export default GSTR;
