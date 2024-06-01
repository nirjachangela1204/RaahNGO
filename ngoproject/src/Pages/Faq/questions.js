import React, { useState,useEffect } from 'react';
import axios from "axios";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    useEffect(() => {
        //Fetch faq data from the API
        const fetchFaqData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/fetchfaq');
                setFaqData(response.data.Data);
            }
            catch(error){
                console.error('Error Fetching Faq Data:',error);
            }
        };
        fetchFaqData();
    },[]); //Empty dependency array ensures useEffect runs only once after component mounts

  return (
    <section className="faq-section">
      <div className="auto-container">
        <div className="faq-content-box">
          <div className="accordion-box">
            {faqData.map((faq, index) => (
              <FaqData
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqData({ index, question, answer, isActive, toggleAccordion }) {
  return (
    <div className={`accordion accordion-block ${isActive ? 'active' : ''}`}>
      <div className="accord-btn" onClick={() => toggleAccordion(index)}>
        <span className="count"></span>
        <h4>{question}</h4>
      </div>
      <div className="accord-content" style={{ display: isActive ? 'block' : 'none' }}>
        <div className="text">{answer}</div>
      </div>
    </div>
  );
}

export default Questions;
