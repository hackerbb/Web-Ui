import React, { useState } from 'react';
import Referral from "./referral/referral.jsx";
import AddLinkIcon from '@mui/icons-material/AddLink';
import "./middle.css"
let amount = 0;
let user = 0;
let referral = 0;
const Middle = () => {
    async function handleChange() {
        var data = await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data').then((res) => res.json());
        window.amount = data.data[0].amount;
        window.user = data.data[0].user;
        window.referral = data.data[0].referral;

    }
    function f() {
        handleChange();
    }
    console.log(window.amount);
    f()
    return (
        <div className="middle-container">
            <div className="navbar">Section</div>
            <div className="tutorial">
                <div className="tutorial-desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <button className="tutorial-button">Tutorial</button>
                </div>
                <div className="tutorial-image"></div>
            </div>
            <div className="rewards">
                <div className="rewards-desc"> Your Rewards </div>
                <div className="total-reward">$ 0.26231428</div>
                <div className="avax">$40 AVAX</div>
                <div className="bnb">$10 BNB</div>
                <div className="btc">$40 BTC</div>
                <div className="custom-link">
                    <button className="custom-link-button">
                        <AddLinkIcon className="link-icon" />
                        <div className=" custom-link-desc">Custom Link</div>
                    </button>
                </div>
            </div>
            <div className="referral-div" >

                <div className="referral-left">
                    <Referral />
                </div>
                <div className="referral-right">
                    <Referral />
                </div>
            </div>

            <div className="first-tab">First Tab</div>
            <div className="second-tab">Second Tab</div>
            <div className="asset" >
                <div className="asset-desc" style={{ display: "inline", margin: "7%" }}>Asset</div>

                <div className="amount" style={{ display: " inline", margin: "7%" }}>Amount</div>
                <div className="user-account" style={{ display: " inline", margin: "7%" }}>User account</div>
                <div className="referal-learning" style={{ display: " inline", margin: "7%" }}>Referral learning</div>
            </div>

            <div className="asset2" >
                <div className="asset-desc2" style={{ display: "inline", margin: "7%" }}></div>
                
            </div>
        </div>
    );
}
export default Middle;