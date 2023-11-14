import React from "react";
import PropTypes from "prop-types";



// core components

import HeaderBanner from "../components/banner/banner";




const Main = () => {
    return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div>
                        <HeaderBanner />

                    </div>
                </div>
            </div>
    );
}

Main.propTypes = {
    classes: PropTypes.object
};

export default Main;
