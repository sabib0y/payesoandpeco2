import Link from 'next/link';
import React from 'react';
import about_img from '@assets/img/about/about-us-2.png';
import Image from 'next/image';
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const AboutUs = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <section className="about__area-2 pt-120 pb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="about__content-2 mb-60 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="section__title mb-50">
                                    <span className="sub-title">about us</span>
                                    <h2 className="title">A company involved in <br /> servicing, maintenance.</h2>
                                </div>
                                <div className="about__content-tab-2 mt-40">
                                    <ul className="nav mb-5" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active clip-lg-btn" id="approach-tab" data-bs-toggle="tab"
                                                data-bs-target="#approach" type="button" role="tab" aria-controls="approach"
                                                aria-selected="true">our approach</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="goal-tab" data-bs-toggle="tab"
                                                data-bs-target="#goal" type="button" role="tab" aria-controls="goal"
                                                aria-selected="false">our goal</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="mision-tab" data-bs-toggle="tab"
                                                data-bs-target="#mision" type="button" role="tab" aria-controls="mision"
                                                aria-selected="false">our mision</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="approach" role="tabpanel" aria-labelledby="approach-tab">
                                            <p>We streamline logistics and foster agricultural innovation by integrating state-of-the-art supply chain management with eco-conscious agro practices. Our approach prioritizes efficiency, sustainability, and the empowerment of local farming communities.
                                            </p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="goal" role="tabpanel" aria-labelledby="goal-tab">
                                            <p>Our goal is to revolutionize the shipping industry and agro-business by providing seamless, cost-effective logistics solutions while championing the growth of sustainable agriculture worldwide.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="mision" role="tabpanel" aria-labelledby="mision-tab">
                                            <p>Our mission is to lead the transition towards a globally integrated logistics and agricultural sector that values environmental stewardship, fosters economic growth, and builds resilient food systems.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="about__img-2 mb-60 ml-60 w-img p-relative wow fadeInLeft" data-wow-duration="1.5s"
                                data-wow-delay=".3s">
                                <Image src={about_img} style={{ width: "100%", height: "auto" }} alt="About" />
                                <div className="about__btn-2">
                                    <button type='button'
                                        className="popup-video play-btn play-btn-white" onClick={() => setIsVideoOpen(true)}><i className="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"J72oMj5mWLw"} />
        </>

    );
};

export default AboutUs;