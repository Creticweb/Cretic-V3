import React from 'react';
import GSTRP from "../components/gstrp";
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
        <GSTRP/>
        </React.Fragment>
  );
}

export default GSTR;
