import React from 'react';
import errorp from '../assets/core/404.svg';
import { Helmet } from "react-helmet";

const NotFound = (props) => {

  return (
    <div className="pt_banner_inner banner_cotact_five" id="myNavbar">
      <Helmet>
          <title>Oops 404 NotFound | Cretic Solutions</title>
      </Helmet>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="banner_title_inner margin-b-5">
              <img class="img-fluid" src={errorp} alt="404 Page"/>
                <h1 className="c-dark" data-aos="fade-up" data-aos-delay={0}>
                  We can’t seem to find the page you’re looking for!
                </h1>
                <p className="c-gray" data-aos="fade-up" data-aos-delay={100}>
                 Sorry! The Page Is Not Found ;( The Link You Followed Is Probably Broken
                </p>
                <div>
                  <a href="/" className="btn btn_lg_primary sweep_top sweep_letter bg-blue rounded-8 c-white margin-t-3">
                    <div className="inside_item">
                      <span data-hover="Cretic Homepage">RETURN TO HOMEPAGE</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
  );
}

export default NotFound;
