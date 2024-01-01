import React from 'react';
import FaqSection from './faq';
import Image from 'next/image';
import service_img from '@assets/img/services/services-details-img.jpg';
import service_img_2 from '@assets/img/services/services-details-img-2.jpg';

const OverviewAlt = ({ item }) => {
    return (
        <div className="services__details-wrapper mb-60">
            <div className="services__details-img mb-35 m-img">
                <Image src={`/assets/img/services/${item.imageSrc}`} alt="services" width={800} height={300} />
            </div>
            <div className="service__details-content mb-25">
                <div className="section__title mb-20">
                    <h3 className="title-sm">{item?.title && item?.title}</h3>
                </div>
                <p>
                    {item?.first_para && item?.first_para}
                </p>
                <p>
                    {item?.second_para && item?.second_para}
                </p>

                <div className="row align-items-center overview-list services-overview-space mb-30">
                    <div className="col-sm-6">
                        <div className="overview-list-img w-img mb-25">
                            <Image src={`/assets/img/services/${item.imageSrc2}`} alt="services" width={800} height={300} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ul className="mb-25">
                            <li>Integrated Shipping</li>
                            <li>Logistics Services</li>
                            <li>Product Distribution</li>
                            <li>Product Sustainability</li>
                            <li>Market leaders</li>
                            <li>Maintain their transt</li>
                        </ul>
                    </div>
                </div>
                {/* <FaqSection /> */}
            </div>
        </div>
    );
};

export default OverviewAlt;