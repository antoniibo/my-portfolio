import React, { useState } from "react";
import './Header.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import logoLight from "../assets/logoVar2Light.png";
import logoDark from "../assets/logoVar2Dark.png";
import Inclusivity from "../Inclusivity/Inclusivity";


function Header(){
    const [menu, setMenu] = useState("home")
    const [isInclusivityBoxVisible, setInclusivityBoxVisible] = useState(false);
    const toggleInclusivityBox = () => {
        setInclusivityBoxVisible(prevState => !prevState);
    };
      
    return(
        <>
        <Inclusivity isVisible={isInclusivityBoxVisible} toggleVisibility={toggleInclusivityBox} />
        <header>
            <nav>
                {/* <div className="burger-menu">
                    <button><FontAwesomeIcon icon={faBars} /></button>
                </div> */}
                <div className="logo-header">
                    <Link to='/'><img src={logoDark} alt="logo"/></Link>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active" : ""}><Link to='/'>Home</Link></li>
                    <li onClick={()=>{setMenu("about")}} className={menu==="about"?"active" : ""}><Link to='/about'>About me</Link></li>
                    <li onClick={()=>{setMenu("projects")}} className={menu==="projects"?"active" : ""}><Link to='/projects'>Projects</Link></li>
                    <li onClick={()=>{setMenu("resume")}} className={menu==="resume"?"active" : ""}><Link to='/resume'>Resume</Link></li>
                </ul>
                <div className="right-bar">
                    {/* <div className="language-swooper">
                        <p onClick={()=>{}}>Укр</p>
                    </div> */}
                    <button onClick={toggleInclusivityBox} className="inclusivity">Aa</button>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;