import React from 'react';

const HomeBanner = (props) => {

  return (
   <section class="demo_1 banner_section banner_demo8 demo__charity">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-5 order-2 order-lg-1 my-auto">
                <div class="banner_title">
                  <h1>
                 Welcome to <br/>
                    Cretic Solution
                  </h1>
                  <p>
                    Cretic Solutions is online business and tax compliance platform that helps
					Entrepreneurs and Families with various registration, tax filing,
					accounting and government services.
                  </p>
                  <button type="button" class="btn scale btn_md_primary btn_video btn_vdo_default rounded-pill">
                       <i class="tio subdirectory_right mr-1"></i> View Details</button>
                </div>
              </div>
              <div class="col-lg-6 ml-auto order-1 order-lg-1">
                <div class="illustration__ch">
                  <img class="img-fluid" src="assets/img/charity/ch1.svg" alt="Company Registration"/>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default HomeBanner;