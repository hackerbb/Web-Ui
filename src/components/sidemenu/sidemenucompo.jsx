import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import StackedLineChartSharpIcon from '@mui/icons-material/StackedLineChartSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
const Sidemenucompo = () => {
    
    return (
        <div className="sidemenucompo"  >

            <div className="sidemenucompo-container">
                <div className="section-icon"> < HomeIcon /></div>
                <div className="sections">Home </div>
            </div>
            
            <div className="sidemenucompo-container"><div className="section-icon"> <AssessmentOutlinedIcon /></div>
                <div className="sections">Section 1</div></div>
            
            
            
            <div className="sidemenucompo-container">
                <div className="section-icon"> < BubbleChartRoundedIcon /></div>
                <div className="sections">Section 2</div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> <StackedLineChartSharpIcon /></div>
                <div className="sections">Section 3</div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> < MonetizationOnOutlinedIcon /></div>
                <div className="sections">Section 4</div>
            </div>
           
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> <StorageOutlinedIcon /></div>
                <div className="sections">Section 5</div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> < PieChartRoundedIcon /></div>
                <div className="sections">Section 6</div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> <BarChartOutlinedIcon /></div>
                <div className="sections">Section 7 </div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> < ShareOutlinedIcon /></div>
                <div className="sections">Section 8 </div>
            </div>
            
            

            <div className="sidemenucompo-container">
                <div className="section-icon"> <StorageOutlinedIcon /></div>
                <div className="sections">Section 9 </div>
            </div>
            
            

            <div className="sidemenucompo-container"><div className="section-icon"> <AssignmentTwoToneIcon /></div>
                <div className="sections">Docomentation </div></div>
            
        </div>
    );
}
export default Sidemenucompo;