import React from "react";
import "./loadspinner.css";

function LoadSpinner(props) {
    var classNames = (props.show) ? "load-spinner-container show" : "load-spinner-container";
    return (
        <div className={`${classNames}`}>
            <div className="load-spinner"></div>
        </div>
    );
}

export default LoadSpinner;

