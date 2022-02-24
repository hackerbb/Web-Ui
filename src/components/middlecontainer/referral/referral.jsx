import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp';
import "./referral.css";
import PaidIcon from '@mui/icons-material/Paid';
const Referral = () => {
    return (
        <div>
           
            <PaidIcon className = "fees" /><div className="referral-desc">12.5% of fee</div>
            <div className ="xyz">Your Referral Link for xyz</div>
            <div className="referral-link">
                <div className="referral-link-desc" >https://unityexhange.design</div>
                <ContentCopySharpIcon className = "copyicon" />
            </div>
        </div >
    )
}
export default Referral;