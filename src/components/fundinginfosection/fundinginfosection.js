import React from "react";
import "./fundinginfosection.css";

function FundingInfoSection (props) {
    return (
        <section className="funding-info-section">
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}

export default FundingInfoSection;