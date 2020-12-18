import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Footer from "../components/footer";

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {fname, lname, email, phone, department, state, message,} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/grv080/google_sheets/EyPIjqWfOAOXnqyq?tabId=Feedback",
                {
                    method: "post",
                    body: JSON.stringify([[fname, lname, email, phone, department, state, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
       <React.Fragment>
      <div className="pt_banner_inner banner_cotact_five" id="myNavbar">
      <Helmet>
          <title>Contact Us | Cretic Solutions</title>
      </Helmet>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="banner_title_inner margin-b-5">
                <h1 className="c-dark" data-aos="fade-up" data-aos-delay={0}>
                  Hi, 🖐 we are <span className="c-blue">Rakon.</span>
                </h1>
                <p className="c-gray" data-aos="fade-up" data-aos-delay={100}>
                  Drop by for a cup of coffe ☕
                </p>
                <div data-aos="fade-up" data-aos-delay={200}>
                  <a href="#contact" className="btn btn_lg_primary sweep_top sweep_letter bg-blue rounded-8 c-white margin-t-3">
                    <div className="inside_item">
                      <span data-hover="Let's talk!">Let's talk!</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title_sections_inner margin-b-6">
                <h2>Contact Us</h2>
                <p>Any question or remarks? Just write us a message!</p>
              </div>
              <div className="form_cc_four">
                <form 
                action 
                className="row"
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
                >
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input 
                      name="fname"
                      type="text" 
                      className="form-control"
                      placeholder="Sanjoy"
                      required
                      onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input 
                      name="lname"
                      type="text" 
                      className="form-control"
                      placeholder="Doe"
                      required
                      onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email </label>
                     <input 
                      name="email"
                      type="email" 
                      className="form-control"
                      placeholder="JhoneDoe@mail.com"
                      required
                      onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                     <input 
                      name="phone"
                      type="phone" 
                      className="form-control"
                      placeholder="+919898989898"
                      required
                      onChange={handleInput}
                      />
                    </div>
                  </div>
        <div className="col-md-6">
        <div className="form-group">
         <label>Select a Department</label>
          <select 
          name="department"
          type="option" 
          className="form-control custom-select"
          required
          onChange={handleInput}
          >
            <option>Please Select</option>
            <option>GST Service</option>
            <option>Company Registration</option>
            <option>RCMC</option>
            <option>General Enquiry</option>
            <option>Digital Signature</option>
            <option>Billing Related</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
         <label>Select State</label>
          <select 
          name="state"
          type="option" 
          className="form-control custom-select"
          required
          onChange={handleInput}
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
          </select>
        </div>
      </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea 
                      className="form-control" 
                      rows={7} 
                      placeholder="Tell us more about your project, needs, and timeline."
                     name="message"
                    onChange={handleInput}
                     defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-12 d-md-flex justify-content-between margin-t-2">
                    
                    <input 
                    class="btn btn_md_primary bg-blue rounded-8 c-white h-fit-content"
                    name="submit" 
                    type="submit" 
                    value="Send" />
                  </div>
                  {message}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
    );
}