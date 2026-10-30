
import React from "react";

// contact info data
const contact_info_data = [
    {
        id: 1,
        icon: "fas fa-phone-alt",
        title: "Call Us Here",
        info_1: "9849461843",
        link_1: "tel:+919849461843",
    },
    {
        id: 2,
        icon: "fas fa-envelope",
        title: "Email Address",
        info_1: "Support@inetcommunication.in",
        info_2: "Info@inetcommunication.in",
        link_1: "mailto:Support@inetcommunication.in",
        link_2: "mailto:Info@inetcommunication.in",
    },
    {
        id: 3,
        icon: "fas fa-map-marker-alt",
        title: "Our Office Address",
        info_1:
            "Flat no 401, Devigardens, Street No 8, Hubsiguda, Hyderabad - Telangana, Pin 500007",
        link_1: "#",
    },
];

const ContactInfo = () => {
    return (
        <>
            <div className="tp-contact-info pb-90">
                <div className="container">
                    <div className="row contact-last-child">

                        {contact_info_data.map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-4 col-md-6"
                            >
                                <div className="contact-info-item text-center mb-30">

                                    <i className={item.icon}></i>

                                    <h5>{item.title}</h5>

                                    {item.link_1 && (
                                        <a href={item.link_1}>
                                            {item.info_1}
                                            <br />
                                        </a>
                                    )}

                                    {item.info_2 && item.link_2 && (
                                        <a href={item.link_2}>
                                            {item.info_2}
                                        </a>
                                    )}

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
