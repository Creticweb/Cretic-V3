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
                <h4>Services</h4>
                <a className="nav-link" href="/gst-registration">GST Registration</a>
                <a className="nav-link" href="/gst-filing">GST Filing</a>
                <a className="nav-link" href="/fssai">FSSAI License</a>
                <a className="nav-link" href="/msme">MSME Registration</a>
				<a className="nav-link" href="/trade">Trade License</a>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="item_links">
                <h4>Business Setup</h4>
                <a className="nav-link" href="/dsc">Digital Signature Certificate</a>
                <a className="nav-link" href="/iso">ISO Certification</a>
                <a className="nav-link" href="/trademark">Trademark Registration</a>
                <a className="nav-link" href="/apeda">APEDA-RCMC Registration</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="item_links">
                <h4>Startup</h4>
				<a className="nav-link" href="/proprietorship">Proprietorship</a>
				<a className="nav-link" href="/partnership">Partnership</a>
				<a className="nav-link" href="/opc">One Person Company</a>
                <a className="nav-link" href="/llp">Limited Liability Partnership</a>
                <a className="nav-link" href="/pvt">Private Limited Company</a>
                <a className="nav-link" href="/">Public Limited Company</a>
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