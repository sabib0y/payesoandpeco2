import Link from 'next/link';
import React from 'react';

const WidgetServices = () => {
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Our Services</h4>
            </div>
            <ul className="widget-services">
                <li><Link href="/services/truck-transport"><i className="fas fa-truck"></i> Truck Freight</Link></li>
                <li><Link href="/services/air-transport"><i className="fas fa-plane"></i> Air Frieght</Link></li>
                <li><Link href="/services/ocean-transport"><i className="fas fa-ship"></i> Ocean Frieght</Link></li>
                <li><Link href="/services/agro-commodities"><i className="fas fa-leaf"></i>Agro commodities</Link></li>
                <li><Link href="/services/customs-clearance"><i className="fas fa-box"></i>Clearing</Link></li>
            </ul>
        </div>
    );
};

export default WidgetServices;