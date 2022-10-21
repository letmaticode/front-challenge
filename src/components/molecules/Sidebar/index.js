import React from "react";
import LoginHeader from "components/atoms/LoginHeader";
import SidebarMenu from "components/atoms/SidebarMenu";

import { isMobile } from 'helpers/Mobile';

import "./styles.scss";
import options from './options.json'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            {!isMobile &&
                <div className="sidebar-version">
                    <p>Desarrollado por RAFAM 2021</p>
                    <span>v4.12.3</span>
                </div>
            }

            {!isMobile &&
                <LoginHeader isSideBar={true}></LoginHeader>
            }

            <React.Fragment>
                <div className="menu-items">
                    <SidebarMenu isMobile={isMobile} options={options} />
                </div>
            </React.Fragment>

            {!isMobile &&
                <div className="sidebar-info">
                    <aside className="sidebar-logo">
                        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4318 12.5962L12.7065 17.9323C11.6359 16.0629 10.408 13.9175 10.2809 13.7034C10.0534 13.3186 10.2709 12.9846 10.5184 12.8104L12.3954 11.9428C12.5794 11.8194 12.6998 11.6016 12.6998 11.3511C12.6998 11.0788 12.5526 10.8393 12.3419 10.7267L6.4601 7.5795H6.45675C6.37311 7.53594 6.27943 7.51053 6.18241 7.51053C5.84114 7.51053 5.5601 7.80456 5.54672 8.1712L5.25899 15.5583C5.25899 15.5764 5.25565 15.5946 5.25565 15.6128C5.25565 15.9939 5.54003 16.3061 5.89467 16.3061C6.00843 16.3061 6.11549 16.2734 6.20917 16.2153L6.21252 16.2117C6.22925 16.2008 6.24598 16.1899 6.25936 16.179L7.73147 14.7343C8.03928 14.5237 8.44411 14.5564 8.65823 14.8976C8.74857 15.0392 10.1705 17.0575 11.4184 18.8217L2.98725 24.6443C2.94376 24.6769 2.89692 24.7096 2.85008 24.7386L2.84004 24.7459C2.57573 24.9092 2.27127 25 1.94674 25C0.946371 25 0.133362 24.1179 0.133362 23.0325C0.133362 22.9817 0.136709 22.9309 0.140055 22.8801L0.956409 1.87672C0.999903 0.831276 1.79618 0 2.76978 0C3.05082 0 3.31513 0.0689701 3.55268 0.192391H3.55602L3.56271 0.196025L20.2846 9.14404C20.8901 9.46348 21.3084 10.135 21.3084 10.9155C21.2983 11.627 20.9537 12.2513 20.4318 12.5962Z" fill="white" />
                        </svg>
                    </aside>
                    <section className="sidebar-contact">
                        <a href="tel:+5492214294484">(0221) 429-4484/4509</a>
                        <a href="mailto:pa@es.gov.ar">pa@es.gov.ar</a>
                    </section>
                </div>
            }
        </div>
    )
}

export default Sidebar;