import React from 'react';
import Home from '../components/banner';
import Service from "../components/service";
import Package from "../components/package";
import Packservice from "../components/packserv";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const Main = (props) => {

  return (
  <React.Fragment>
  <Helmet>
     <title>Cretic Solutions - GST, Incorporation & MSME Registration</title>
      <meta
      name="description"
      content="We offer online services like company registration, trademark filing, income tax filing, GST registration, GST return filing"
    />
    <meta name="keywords" content="GST Registration, Enrollment for GST, New GST Registration, GST Portal Access,GST Registration Online, GST Registration Status, GST Registration Fees" />
    </Helmet>
    <Home/>
	<Service />
	<Package/>
	<Packservice/>
	<div class="contact__workspace margin-t-12 padding-py-10">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="title_sections mb-0">
                  <h2 class="c-white">Ready to give us a try?</h2>
                  <p class="c-white mb-0">We have 2 years of experience in this field, with 100% client satisfaction.
                  </p>
                </div>
              </div>
              <div class="col-lg-7 mt-4 mt-lg-0 text-lg-right my-lg-auto">
                <a href="#" class="btn btn_md_primary sweep_top sweep_letter rounded-8 opacity-1">
                  <div class="inside_item">
                    <span data-hover="Contact">Contact us</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
	<Footer/>
  </React.Fragment>
 
  );
}

export default Main;