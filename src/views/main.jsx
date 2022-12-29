import React from "react";
import PropTypes from "prop-types";



// core components
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import HeaderBanner from "../components/banner/banner";
import PortfolioComponent from "./custom-components/sections/portfoliocomponent";



const Main = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div>
                        <HeaderBanner />
                        <PortfolioComponent />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Main.propTypes = {
    classes: PropTypes.object
};

export default Main;
