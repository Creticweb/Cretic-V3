import React from 'react';
import Home from '../components/banner';
import Service from "../components/service";
import Package from "../components/package";
import Packservice from "../components/packserv";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const Main = (props) => {

  return (
  <React.Fragment>
  <Helmet>
     <title>Cretic Solutions - GST, Incorporation & MSME Registration</title>
      <meta
      name="description"
      content="We offer online services like company registration, trademark filing, income tax filing, GST registration, GST return filing"
    />
    <meta name="keywords" content="GST Registration, Enrollment for GST, New GST Registration, GST Portal Access,GST Registration Online, GST Registration Status, GST Registration Fees" />
    </Helmet>
    <Home/>
	<Service />
	<Package/>
	<Packservice/>
	<Footer/>
  </React.Fragment>
 
  );
}

export default Main;