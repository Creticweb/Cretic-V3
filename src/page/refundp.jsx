import React from 'react';
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
//import bgim from './assets/core/about.jpg';
const RefundPolicy = (props) => {
  return (
    <React.Fragment>
    <Helmet>
      <title>Refund and Cancellation Policy</title>
    </Helmet>
    <div class="pt_banner_inner-mod">
    <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <h2>
                       Refund and Cancellation Policy
                    </h2>
                    <p>Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before taking the services.<br/>
                    In case of dissatisfaction from our services, clients have the liberty to cancel their services and request a refund from us. Our Policy for the cancellation and refund will be as follows:</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <h2>
                       Cancellation Policy
                    </h2>
                    <p>Customer satisfaction is our main priority. If we fail to provide services from our end, but the customer has paid for the service then customer will be liable to mention the same to us within 24 hours. If the customer changes its mind for the services taken, we will not be liable to cancel the service. In case customers asks us to hold the processing of the service, we shall hold the fees paid to the department in the case.
                    <br/>
                    Beforeore processing any refund, we reserve the right to make best effort to complete the service. In case, you are not satisfied with the service, a cancellation fee of 20% + earned fee + fee paid to government or any third party would be applicable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
    <div class="row justify-content-center">
		  <div class="container">
                  <div class="banner_title">
                    <h2>
                       Refund Policy
                    </h2>
                    <p>We will refund the money only in case we fail to provide service to our customers from our end. Applicant need to apply for the same via email at creticweb@gmail.com.
                    <br/>
                    Refundwill not be provided to the user, once it is earned by the company, because of the time and energy invested by our manpower for their work done, which is not returnable. So basically, all the processing fees, payment gateway charges, admin fees, and cost of resources for the work done, will be deducted. In short, further, we can’t refund any money which is paid to government bodies, such as filing fees or taxes, or to other third parties with a role in processing your order.</p>
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
         </div>
			<Footer/>
	</React.Fragment>
  );
}

export default RefundPolicy;