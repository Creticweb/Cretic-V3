import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
			  <Route path="/contact" component={Contact} />
            </Switch>
          </main>
      </Router>
    </React.Fragment>
  );
}

export default App;