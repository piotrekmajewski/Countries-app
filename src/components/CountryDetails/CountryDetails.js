import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CountryDetails() {
    return (
        <div className="country_details">
            <button className="back">
                <ArrowBackIosIcon />
                Go back
            </button>
            <div className="country_details_body">
                <div className="img_container">
                    <img src="" alt="" />
                </div>
                <div className="info">
                    <h2 className="details_name">Name</h2>
                    <div className="info_container">
                        <div className="left_info">
                            <p>Native Name:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Popualation:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Region:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Subregion:{" "}
                                <span className="values">Test</span>
                            </p>
                        </div>
                        <div className="right_info">
                            <p>Capital:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Top-level Domain:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Currencies:{" "}
                                <span className="values">Test</span>
                            </p>
                            <p>Languages:{" "}
                                <span className="values">Test</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;