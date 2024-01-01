import DetailServices from '@components/extra-page/services-details';
import SEO from '@components/seo';
import content from '@data/services-content';
import services_data from '@data/services-data';
import FooterOne from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';


const index = () => {
    const item = content[2]

    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Agro Commodities'} />
                <HeaderOne headerClass="header__two menu-sticky white-bg" />
                <DetailServices item={item} />
                <FooterOne />
            </Wrapper>
        </>
    );

};

export default index;