import React from 'react';

const Footer = (props) => {

  return (
     <footer className="defalut-footer light padding-py-12 footer__ch">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="item_about">
                <a className="logo" href="/">
                  <img src="../../assets/img/logo-o.png" alt="" />
                </a>
                <p>
                  Cretic Solutions & Cretic Web Solutions 
				  is a part of SRV Impex International
                </p>
                <div className="address">
                  <span>194 S.N DEY ROAD , HABRA</span>
                  <span>Call us: <a href="tel:+919647540052">+91 964-754-0052</a></span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="item_links">
                <h4>Social</h4>
                <a className="nav-link" href>Blog</a>
                <a className="nav-link" href>Facebook</a>
                <a className="nav-link" href>Twitter</a>
                <a className="nav-link" href>Instagram</a>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="item_links">
                <h4>Company</h4>
                <a className="nav-link" href>About</a>
                <a className="nav-link" href>Affiliates</a>
                <a className="nav-link" href>Careers</a>
                <a className="nav-link" href>Legal &amp; Privacy</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="item_subscribe">
                <h4>Subscribe</h4>
                <p>
                  Subscribe to get the latest<br />
                  news form us
                </p>
                <form className="form-row">
                  <div className="col-md-11 form-group subscribebtn">
                    <div className="item_input">
                      <input type="email" className="form-control rounded-12 border-1" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp" />
                      <button type="button" className="btn ripple_circle scale rounded-8 btn_subscribe">
                        <i className="tio send" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 margin-t-1">
              <select data-menu>
                <option selected>English</option>
              </select>
            </div>
          </div>
          <div className="col-12 text-center padding-t-4">
            <div className="copyright">
              <span>© 2020 
                 <a href="https://creticweb.com">Cretic Solution.</a>
                All Right Reseved</span>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;