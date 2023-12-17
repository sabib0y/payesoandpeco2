import React from 'react';
import ServiceDetails from './service-details';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = ({ item: { itemDetails, title } }) => {
    return (
        <main>
            <Breadcrumb title={title} subTitle={title} />
            <ServiceDetails item={itemDetails} />
        </main>
    );
};

export default index;