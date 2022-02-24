import React  from 'react';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./Last.css"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import LinkIcon from '@mui/icons-material/Link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Last = () =>
{
    return (
        <div className="last-container">

            <div className="avalanche">
                <div className="avalanche-img"></div>Avalanche
                <ArrowDropDownSharpIcon />

            </div>
            <div className="balance">
                <AccountBalanceWalletOutlinedIcon color="primary" className="wallet" />
                <div className="balance-desc">0XF6...1353</div>
                <ArrowDropDownSharpIcon />
            </div>

            <div className="custom-link2">
                < ArrowBackOutlinedIcon />
                <div className="custom-link-desc2">Custom Link</div>
                <div className="space" >
                    http://testnetxyzxyz//trade?ref=</div>
                <input type="text" className="linkk" placeholder="  Enter" />
                <button className="custom-link-button2"><LinkIcon /> Custom Link</button>
                <button className="custom-link-button2" style={{ display: "inline", backgroundColor: "black", border: "1px solid white" }}><ArrowBackIosNewIcon />Cancel</button>
            </div>
        </div>
    );
}
export default Last;