import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import ReactGa from "react-ga";
import Navbar from "./components/Navbar";
//import MovingText from 'react-moving-text'
//import Whatsapp from "./components/whatsapp";
//import Footer from "./components/footer";
//import Register from "./components/register";



import Home from "./page/home";
import Contact from "./page/contact";
import Gstpage from "./page/gstservices";
import MSME from "./page/msme";
import GSTR from "./page/gstr";
import FSSAI from "./page/fssai";
import DSC from "./page/dsc";
import Policy from "./page/policy";
import Refund from "./page/refundp";
import GSTCAL from "./page/gstcal";
import NotFound from "./page/notfound";
import Test from "./page/test";

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name:
    "We offers a suite of online services like company registration, trademark filing, income tax filing, GST registration, GST return filing",
  alternateName: "Cretic Solutions offers a suite of online services",
  url: "https://creticweb.com/",
};

function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-161766535-2");
    // UA-163288419-1
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Router history={history}>
        <Navbar/>
          <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">
            <Switch>
              <Route exact path="/" component={Home} />
			  <Route path="/gst-services" component={Gstpage} />
			  <Route path="/gst-registration" component={Gstpage} />
			  <Route path="/msme" component={MSME} />
			  <Route path="/fssai" component={FSSAI} />
			  <Route path="/gst-filing" component={GSTR} />
			  <Route path="/dsc" component={DSC} />
			  <Route path="/refund-policy" component={Refund} />
		          <Route path="/privacy" component={Policy} />
			  <Route path="/contact" component={Contact} />
			  <Route path="/gst-calculator" component={GSTCAL} />
			  <Route path="/test" component={Test} />
			   <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
            </Switch>
          </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
