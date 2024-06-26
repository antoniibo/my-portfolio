import React, { useState, useEffect } from "react";
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
    const [isNavVisible, setNavVisible] = useState(false);


    const toggleInclusivityBox = () => {
        setInclusivityBoxVisible(prevState => !prevState);
    };
    const toggleNavVisible =()=>{
        setNavVisible(prevState => !prevState);
    }
    useEffect(() => {
        if (isNavVisible) {
            setInclusivityBoxVisible(false);
        }
    }, [isNavVisible]);

    return(
        <>
        <Inclusivity isVisible={isInclusivityBoxVisible} toggleVisibility={toggleInclusivityBox} />
        <header>
            <nav> 
                <div className="burger-menu">
                    <button  onClick={() => { toggleNavVisible() }}><FontAwesomeIcon icon={faBars}/></button>
                </div>
                <div className="logo-header">
                    <Link to='/'>
                        <img src={logoDark} alt="logo"/>
                        <img src={logoLight} alt="logo"/>
                    </Link>
                </div>
                <div className={ `nav-overlay ${isNavVisible ? 'visible-nav' : ''}`} onClick={toggleNavVisible}>
                    <ul className="nav-menu">
                        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link></li>
                        <li onClick={()=>{setMenu("about")}}><Link to='/about'>About me</Link></li>
                        <li onClick={()=>{setMenu("projects")}}><Link to='/projects'>Projects</Link></li>
                        <li onClick={()=>{setMenu("resume")}}><Link to='/resume'>Resume</Link></li>
                    </ul>
                </div>
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