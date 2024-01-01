import React from 'react';
import Contact from './contact';
import Map from '@components/map';

const ContactFrom = () => {
    return (
        <section className="contact-area contact--area pt-120 pb-110 wow fadeInUp" data-wow-duration="1.5s"
            data-wow-delay=".3s">
            <div className="container">
                <div className='row'>
                    <p className='contact-teaser'>
                        Reach out to Payeso and Peco for bespoke logistics solutions tailored to your unique needs. Our dedicated team is available to discuss your requirements and provide expert guidance on our comprehensive shipping, clearing, and forwarding services. Whether you&apos;re seeking information on global cargo transport or agro commodity procurement, we are here to assist.
                    </p>
                    <p>
                        Contact us today via telephone or email to initiate a conversation that could transform your logistical operations. Our offices in the USA, Nigeria, and Ghana are strategically located to serve you with precision and responsiveness. Let us connect you to the world with efficiency and excellence.
                    </p>
                </div>
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-5">
                        <Contact />
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-7">
                        <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFrom;