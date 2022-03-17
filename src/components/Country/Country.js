import React from "react";

function Country() {
    return (
        <div className="country">
            <div className="flag_container">
                <img src="" alt="" />
            </div>
            <div className="details">
                <h3 className="name">Name</h3>
                <div className="button-more">
                    <button className="read-more">Read more...</button>
                </div>
            </div>
        </div>
    );
}

export default Country;