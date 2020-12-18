import React from 'react';

const Navbar = (props) => {

  return (
     <header className="header-nav-center header_ch_left active-lightgreen" id="myNavbar">
        <div className="container">
          {/* navbar */}
          <nav className="navbar navbar-expand-lg navbar-light px-sm-0">
            <a className="navbar-brand" href="/">
              <img className="logo" src="/assets/img/logo-o.png" alt="logo" />
            </a>
            <button className="navbar-toggler menu ripplemenu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gst-registration">GST</a>
                </li>
               <li className="nav-item">
                  <a className="nav-link" href="/start-business">Start Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/license">Registrations and Licenses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
              <div className="nav_account btn_demo3">
                <a href="/" className="btn btn_sm_primary border-0 sweep_letter sweep_top bg-lightgreen c-white rounded-pill">
                  <div className="inside_item">
                    <span data-hover="Let's go 👋">Whatsapp</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
        {/* end container */}
      </header>
  );
}

export default Navbar;