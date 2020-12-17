import React from 'react';
import GSTREG from '../components/gstreg';
import GSTFAQ from '../components/gstfaq';
//import gstbg from "../assets/core/about.jpg";

const GSTServices = (props) => {

  return (
   <React.Fragment>
    <div class="pt_banner_inner-mod">
    <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <div class="before_title">
                      <span>Affordable Packages </span>
                      <span class="c-red">for Small Businesses</span>
                    </div>
                    <h3>
                       How Does <span class="c-red">GST Registration</span> Work For You ?
                    </h3>
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
                    <img src="../../assets/img/icons/Compass.svg" alt="" />
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
                    <img src="../../assets/img/icons/cupboard.svg" alt="" />
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
                    <img src="../../assets/img/icons/sofa.svg" alt="" />
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
    </React.Fragment>
  );
}

export default GSTServices;