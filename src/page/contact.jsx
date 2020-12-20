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
                  Hi, 🖐 welcome to <span className="c-blue">Cretic Solutions</span>
                </h1>
                <p className="c-gray" data-aos="fade-up" data-aos-delay={100}>
                  <b>COVID19 Note: </b> Services will not be disrupted from our side. Please expect delays from government side in case of any registration.
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
      <div className="sec__office_location with_map_office padding-t-15 padding-b-12">
        <div className="container">
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="block_loaction" data-aos="fade-up" data-aos-delay={100}>
                  <div className="title">
                    Kolkata, IN
                  </div>
                  <div className="item_locat">
                    <p className="add_ress">S N Dey Road, 194 Habra,
                       West Bengal, 743263
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} viewBox="0 0 62 62">
                      <g id="england" transform="translate(-1 -1)">
                        <path id="Path_1634" data-name="Path 1634" d="M24,28H40v4H24Z" fill="#fd6b3b" opacity="0.15" />
                        <circle id="Ellipse_231" data-name="Ellipse 231" cx={4} cy={4} r={4} transform="translate(28 38)" fill="#fd6b3b" opacity="0.15" />
                        <g id="Group_6444" data-name="Group 6444">
                          <path id="Path_1635" data-name="Path 1635" d="M27,42a5,5,0,1,0,5-5A5.006,5.006,0,0,0,27,42Zm5-3a3,3,0,1,1-3,3A3,3,0,0,1,32,39Z" fill="#fd6b3b" />
                          <path id="Path_1636" data-name="Path 1636" d="M41,48.816A3,3,0,0,0,43,46V38a3,3,0,0,0-2-2.816V21H39v4l-1.2-1.6A1,1,0,0,0,37,23V14H35v2.63A17.348,17.348,0,0,1,33.184,11H35V9H33.017c0-.062-.007-.125-.008-.187A2.983,2.983,0,0,0,33,3.184V1H31V3.184a2.983,2.983,0,0,0-.009,5.629c0,.062-.007.125-.008.187H29v2h1.816A17.348,17.348,0,0,1,29,16.63V14H27v9a1,1,0,0,0-.8.4L25,25V21H23V35.184A3,3,0,0,0,21,38v8a3,3,0,0,0,2,2.816V61H1v2H63V61H41ZM27,51v2H25V49H39v4H37V51H35v2H33V51H31v2H29V51Zm4,4v6H29V55Zm2,0h2v6H33Zm4,0h2v6H37ZM25,29H39v2H25Zm0,4H39v2H25Zm9.067-14H29.932A19.3,19.3,0,0,0,32,14.676,19.393,19.393,0,0,0,34.067,19ZM32,5a1,1,0,1,1-1,1A1,1,0,0,1,32,5ZM29,21h6v2H29Zm-1.5,4h9L38,27H26ZM23,38a1,1,0,0,1,1-1H40a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H24a1,1,0,0,1-1-1Zm2,17h2v6H25Z" fill="#fd6b3b" />
                          <path id="Path_1637" data-name="Path 1637" d="M7.232,44.318a6.035,6.035,0,0,0,5.535,0A3.96,3.96,0,0,0,15,45a4,4,0,0,0,.677-7.942,6,6,0,0,0-11.354,0A4,4,0,0,0,5,45a3.954,3.954,0,0,0,2.232-.682ZM3,41a1.994,1.994,0,0,1,1.913-2.005c.037.005.12.013.157.015a1.022,1.022,0,0,0,1.01-.8,4,4,0,0,1,7.84,0,1,1,0,0,0,.98.8,1.225,1.225,0,0,0,.14-.01A2,2,0,0,1,15,43a1.982,1.982,0,0,1-1.428-.6,1,1,0,0,0-1.288-.12,4.028,4.028,0,0,1-4.568,0,1,1,0,0,0-1.288.12A1.982,1.982,0,0,1,5,43a2,2,0,0,1-2-2Z" fill="#fd6b3b" />
                          <path id="Path_1638" data-name="Path 1638" d="M59.677,15.058a6,6,0,0,0-11.354,0A4,4,0,0,0,49,23a3.954,3.954,0,0,0,2.232-.682,6.035,6.035,0,0,0,5.535,0A3.96,3.96,0,0,0,59,23a4,4,0,0,0,.677-7.942ZM59,21a1.982,1.982,0,0,1-1.428-.6,1,1,0,0,0-1.288-.12,4.028,4.028,0,0,1-4.568,0,1,1,0,0,0-1.288.12A1.982,1.982,0,0,1,49,21a2,2,0,0,1-.087-4.005c.037,0,.12.013.157.015a1.026,1.026,0,0,0,1.01-.8,4,4,0,0,1,7.84,0,1,1,0,0,0,.98.8c.034,0,.083,0,.14-.01A2,2,0,0,1,59,21Z" fill="#fd6b3b" />
                        </g>
                      </g>
                    </svg>
                    <div className="availability">
                      <span>Availability</span>
                      <p>(Mon-Sat) 9AM to 8PM </p>
                    </div>
                    <div className="availability mb-0">
                      <span>General enquiries</span>
                      <a href="tel:+919647540052" className="c-blue">+91 964 754 0052</a>
                    </div>
                  </div>
                </div>
              </div>
              
                  
            </div>
          </div>
      <Footer/>
    </React.Fragment>
    );
}