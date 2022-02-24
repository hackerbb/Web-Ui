import Sidemenu from "./components/sidemenu/sidemenu.jsx";
import React from 'react';
import "./App.css"
import Middle from "./components/middlecontainer/middle.jsx";
import Last from './components/lastcontainer/Last.jsx';
const App = () => {
    return (
        <>
            <div className="bar">Lorem Ipsum is simply dummy text of the printing </div>
            <Sidemenu />
            <Middle />
            <Last />      
        </>
    )
}
export default App;
