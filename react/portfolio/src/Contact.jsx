import React from 'react'
import "./ContactStyle.css"

const Contact = ({theme}) => {
  return (
    <div  style={{backgroundColor:theme=="light"?"white":"black" , color:theme=="light"?"black":"white" }}>
      <section className="contact-page-section my-0">
        <div className="container my-0">
          <div className="sec-title">
            <div className="title">Contact Us</div>
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container my-0">
            <div className="row clearfix">


              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">


                  <div className="contact-form">
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="name" value="" placeholder="Name" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="email" name="email" value="" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="subject" value="" placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="phone" value="" placeholder="Phone" required />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea name="message" placeholder="Massage"></textarea>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                        </div>
                      </div>
                    </form>
                  </div>


                </div>
              </div>


              <div className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2>Contact Info</h2>
                  <ul className="list-info">
                    <li><i className="fas fa-globe"></i>123 lorem ispum Abc, Street Chandigarh.</li>
                    <li><i className="far fa-envelope"></i>example@test</li>
                    <li><i className="fas fa-phone"></i>1-234-567-890 <br /> 1-234-567-890</li>
                  </ul>
                 
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact