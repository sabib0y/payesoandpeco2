
import AboutUsArea from '@components/extra-page/about-us';
import ServicesAreaTwo from '@components/home-2/services-area-two';
import SEO from '@components/seo';
import FooterOne from '@layout/footer/footer-1';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Payeso and Peco'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <AboutUsArea />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;