import React from 'react';

const Counter = (props) => {

  return (
     <section class="about__office margin-b-6 ">
          <div class="body__content no-before py-0 my-0 bg-white">

            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-lg-5">
                  <div class="title_sections_inner margin-b-5">
                    <h2>Client Base</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="item__counter">
                    <h4 class="c-dark">
                      <span class="counter">1200</span>
                      +
                    </h4>
                    <p class="c-gray">Total Clients</p>
                  </div>
                </div>
                <div class="col-md-3 mx-auto">
                  <div class="item__counter">
                    <h4 class="c-dark">
                      <span class="counter">97</span> %
                    </h4>
                    <p class="c-gray">Success Ratio </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="item__counter">
                    <h4 class="c-dark">
                      <span class="counter">100</span>
                      %
                    </h4>
                    <p class="c-gray">Service Coverage</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
  );
}

export default Counter