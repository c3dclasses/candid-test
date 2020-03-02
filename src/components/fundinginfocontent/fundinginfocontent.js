import React, {useState, useEffect} from "react";
import LoadSpinner from "../loadspinner/loadspinner";
import $ from "jquery";
import "./fundinginfocontent.css";

function FundingInfoContent(props) {
    const [fundingInfo, setFundingInfo] = useState({
        list: [],
        error: false,
        yearinfo: "",
        loading: false,
        more: false
    });

    function handleYearSelector(e, yearinfo) {
        let url = "http://kevlewis.com/projects/proxy/proxy.php";
        let years = yearinfo.split("-");
        let params = [
            `url=${props.url}`,
            "apiKey=3A50C1D7-82FB-425C-92F1-5B2922288DA7",
            "by_year=false"
        ];
        params.push(`year=${years[0]}`);
        if(years.length > 1)
            params.push(`max_year=${years[1]}`);

        setFundingInfo({
            list: [],
            loading: true, 
            year: -1,
            error:false,
            more: false,
            yearinfo: ""
        });
        fetch(`${url}?${params.join("&")}`)
        .then(response => response.json())
        .then(response=>{
            setFundingInfo({
                loading:false,
                list: response.data.results.rows,
                yearinfo: yearinfo
            });
        })
        .catch(()=>{
            setFundingInfo({
                error: true,
                loading: false
            });
        });
    }

    function handleClick(e) {
        setFundingInfo({
            more:!fundingInfo.more,
            funders:fundingInfo.funders,
        });
    }

    function renderTopList() {
        return (
            <div className="funding-info-content top-list">
                <LoadSpinner show={fundingInfo.loading}/>
                {
                    fundingInfo.list.length > 0 &&
                <div>
                <p className="year-info">of Latinx funding in the U.S. in <b>{fundingInfo.yearinfo}</b></p>
                <input type="checkbox" class="more-state" id={`more-state-${props.id}`} />
                <ol className="more-wrap">
                    {fundingInfo.list.map((funder,index)=>{    
                        let more = (index > 4 && !fundingInfo.more) ? "more-target" : "";
                        return <li className={more} key={index}><span className="funder-name">{funder.name}</span><span className="funder-amount">${(funder.amount/1000000).toFixed(2).toLocaleString()} M</span></li>
                    })}
                </ol>
                <label for={`more-state-${props.id}`} class="more-trigger"></label>
                </div>
                }
            </div>
        );
    }

    function renderSummary() {
        let amountTotalsMsg = "";
        let grantTotalsMsg = "";
        let yearMsg = "";
        if(fundingInfo.list.length > 0) {
            amountTotalsMsg = `$${fundingInfo.list[0].amt.toLocaleString()}`;
            grantTotalsMsg = `${fundingInfo.list[0].cnt.toLocaleString()} Grants`;
            yearMsg = `of Latinx funding in the U.S. in ${fundingInfo.yearinfo}`;
        }
        return (
            <div className="funding-info-content summary">
                <LoadSpinner show={fundingInfo.loading}/>
                <p className="dollars">{amountTotalsMsg}</p>
                <p className="grants">{grantTotalsMsg}</p>
                <p className="year">{yearMsg}</p>
            </div>
        );
    }

    useEffect(()=>{$(document).on("onyearselector", handleYearSelector);}, []);
    
    return (props.display === "summary") ? renderSummary() : renderTopList();
} 


export default FundingInfoContent;