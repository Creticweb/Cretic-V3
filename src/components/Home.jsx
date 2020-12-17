import React from 'react';

const Home = (props) => {

  return (
   <section class="demo_1 banner_section banner_demo8 demo__charity">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-5 order-2 order-lg-1 my-auto">
                <div class="banner_title">
                  <h1>
                    Together <br/>
                    We Can Change
                    The World
                  </h1>
                  <p>
                    Indigenous communities are on the front lines of some of the biggest environmental challenges—it’s
                    time to start listening to them.
                  </p>
                  <button type="button" class="btn scale btn_md_primary btn_video btn_vdo_default rounded-pill"
                    data-toggle="modal" data-src="https://www.youtube.com/embed/VvHoHw5AWTk" data-target="#mdllVideo">
                    <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <g id="Group_6267" data-name="Group 6267" transform="translate(-3 -3)">
                        <circle id="Combined-Shape" cx="9" cy="9" r="9" transform="translate(3 3)" fill="#fd6b3b"
                          opacity="0.3" />
                        <path id="Path-10"
                          d="M11.158,15.873l3.992-3.482a.5.5,0,0,0,0-.753l-3.992-3.5a.5.5,0,0,0-.83.376V15.5a.5.5,0,0,0,.829.377Z"
                          fill="#fd6b3b" fill-rule="evenodd" />
                      </g>
                    </svg>
                    Discover Video
                  </button>
                </div>
              </div>
              <div class="col-lg-6 ml-auto order-1 order-lg-1">
                <div class="illustration__ch">
                  <img class="img-fluid" src="assets/img/charity/ch1.svg"/>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Home;