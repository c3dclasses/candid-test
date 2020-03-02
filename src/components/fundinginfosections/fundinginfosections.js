import React from "react";
import "./fundinginfosections.css";

function FundingInfoSections (props) {
    return (
        <div className="funding-info-sections">
            {props.children}
        </div>
    );
}

export default FundingInfoSections;