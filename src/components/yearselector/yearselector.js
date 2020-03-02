import React from "react";
import $ from "jquery";
import "./yearselector.css";

function YearSelector(props) {
    const yearsOptions = [
        {value:"2013-2017", name:"All Years (2013-2017)"},
        {value:"2013", name:"2013"},
        {value:"2014", name:"2014"},
        {value:"2015", name:"2015"},
        {value:"2016", name:"2016"},
        {value:"2017", name:"2017"}
    ];
    
    function handleChange(e) {
        $(document).trigger("onyearselector", e.target.value);
    }

    setTimeout(()=>{
        $(document).trigger("onyearselector", yearsOptions[0].value);
    }, 1000);

    return (
        <div className="year-selector">
            <span className="label">Select Year</span>
            <select name="yearselector" onChange={handleChange}>
            {yearsOptions.map((opt,index) =><option key={index} value={opt.value}>{opt.name}</option>)}
            </select>
        </div> 
    );
}

export default YearSelector;