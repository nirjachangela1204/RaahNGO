import { useState } from "react";
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

// method to set data in hook
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        // Send form data to your API endpoint
        const response = await axios.post('http://localhost:8000/addcontact', formData);

        // handle success, e.g., show a success message to the user
        console.log('Form data sent successfully:', response.data);

        if (response.status === 200) {
            alert(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }
    } catch (error) {
        // Handle errors, e.g., show an error message to the user
        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert("Error sending the form data.");
        }
    }
};

  return (
    <>
      <section class="contact-form-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-8">
              <div class="default-form-area">
                <div class="sec-title">
                  <h1>Drop a line us</h1>
                </div>
                <form id="contact-form" name="contact_form" class="contact-form"  onSubmit={handleSubmit}>
                  <div class="row clearfix">
                    <div class="col-lg-6 col-md-6 column">
                      <div class="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 column">
                      <div class="form-group">
                      <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 column">
                      <div class="form-group">
                      <input type="tel" name="phone" className="form-control" id="phone"  placeholder="Phone" value={formData.phone} onChange={handleChange} required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 column">
                      <div class="form-group">
                      <input type="text" name="subject" className="form-control" id="subject"  placeholder="Subject" value={formData.subject} onChange={handleChange} required/>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 column">
                      <div class="form-group">
                      <textarea className="form-control" name="message" id="message" rows="3" placeholder="Message...." value={formData.message} onChange={handleChange} required></textarea>
                      </div>
                      <div class="form-group flex-box">
                        <div class="submit-btn">
                          <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                          <button class="theme-btn btn-style-one" type="submit" data-loading-text="Please wait...">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p id="formmsg"></p>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-info-three">
                <div class="single-info">
                  <h4>Address</h4>
                  <div class="text">
                  E/207, Paranti Awas Society, Nr. Vasani Party Plot, Beside Shyam Residency-83, 
                  Opp. Dastan Circle, S P Ring Road, Kathwada - 382430 <br/> Ahmedabad, Gujarat
                  </div>
                </div>
                <div class="single-info">
                  <h4>Quick Contact</h4>
                  <div class="wrapper-box">
                    <a href="mailto:rahgujarat2010@gmail.com">
                    rahgujarat2010@gmail.com{" "}
                    </a>{" "}
                    <br />
                    <a href="tel:+(91) 7894561236">7894561236</a><br/>
                    <a href="tel:+(91)  9685745869">9685745869</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;