import React from "react";
import PropTypes from "prop-types";



// core components

import HeaderBanner from "../components/banner/banner";
import PortfolioComponent from "./custom-components/sections/portfoliocomponent";



const Main = () => {
    return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div>
                        <HeaderBanner />
                        <PortfolioComponent />
                    </div>
                </div>
            </div>
    );
}

Main.propTypes = {
    classes: PropTypes.object
};

export default Main;
