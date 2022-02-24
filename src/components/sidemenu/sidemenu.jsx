import React from "react";
import Sidemenucompo from "./sidemenucompo";
import "./sidemenu.css";
import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleIcon from '@mui/icons-material/Circle';
const Sidemenu = () => {
    return (
        <div className="Sidemenu">
        <div className ="name-icon">N</div>
            <div className =  "name"><Typography variant="caption">Name</Typography>
            <KeyboardBackspaceTwoToneIcon className = "back"/>
            </div>
            
            <Sidemenucompo />
            <div className="div1">$0.90</div>
            <div className="div2">Buy $XYZ</div>
            <div className="user" ><LanguageIcon /></div>
            <div className="nightmode">
                <DarkModeIcon />
                <CircleIcon color = "primary" />
            </div>
            </div>
    )
}
export default Sidemenu;