import ContactForm from '@/src/forms/contact-form';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <div className="contact-page pt-115 pb-115">
                <div className="container">
                <div className="contact-bg grey-bg">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-7 col-lg-6">
                            
{/* GOOGLE MAP LOCATION */}
<div className="inet-contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4527.490053074804!2d78.54051166929793!3d17.404580173955736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993e28c31eb1%3A0x4b6f18b4bbbf16f7!2sDevi%20Gardens%20Ln%20%26%20Street%20No.%208%2C%20JSN%20Colony%2C%20Habsiguda%2C%20Hyderabad%2C%20Telangana%20500013!5e0!3m2!1sen!2sin!4v1793195044170!5m2!1sen!2sin"
    title="iNet Communications - Habsiguda, Hyderabad Location"
    width="100%"
    height="650"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-6">
                        <div className="contact-us">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">contact us</span>
                                <h2 className="tp-section-title mb-35">
                                    Get In Touch
                                </h2>
                            </div>
                            <div className="contact">
                                <div className="contact__form">
                                    <ContactForm /> 
                                    <p className="ajax-response"></p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    );
};

export default ContactArea;