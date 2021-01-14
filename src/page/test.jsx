import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    axios
      .get('https://api.sheety.co/79cf850c03e3629f3c4ef52bc4e00613/sql/sheet1')
      .then((response) => {
        setFaq(response.data['sheet1']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      {faq.map((faq, index) => {
        return (
          <Helmet>
            <title>{faq.title}</title>
          </Helmet>
        );
      })}
    </div>
  );
}

export default FAQ;