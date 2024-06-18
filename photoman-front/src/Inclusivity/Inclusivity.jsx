import React, { useState, useEffect,useRef } from "react";
import './Inclusivity.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faCircleHalfStroke, faBan } from '@fortawesome/free-solid-svg-icons'

function Inclusivity({isVisible, toggleVisibility }) {
    const [theme, setTheme] = useState('classic');
    const [image, setImage] = useState('imgVisible');
    const initialFontSize = useRef(null);

    useEffect(() => {
        document.documentElement.className = `${theme} ${image}`;
         // Save the initial font size
         if (!initialFontSize.current) {
            const root = document.documentElement;
            initialFontSize.current = getComputedStyle(root).getPropertyValue('--headersSize');
        }
    }, [theme, image]);
    // change font size
    const changeFontSize = (value) => {
        const root = document.documentElement;
        const currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--headersSize').replace('px', ''));
        const newSize = currentSize + value;
        root.style.setProperty('--headersSize', `${newSize}px`);
    };

    // change colours
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.className = `${newTheme} ${image}`;
    };

    // images controls
    const changeImage = (newImage)=>{
        setImage(newImage);
        document.documentElement.className = `${theme} ${newImage}`;
    }
    
    // reset setting
    const resetSettings = () => {
        changeTheme('classic');
        changeImage('imgVisible')
        if (initialFontSize.current) {
            document.documentElement.style.setProperty('--headersSize', initialFontSize.current);
        }
        
    };
    return (
        <section className={`inclusivity-box ${isVisible ? 'display' : ''}`}>
            <div className="change-size" >
                <h3>Font size</h3>
                <button onClick={() => changeFontSize(-1)}>A-</button>
                <button onClick={() => changeFontSize(1)}>A+</button>
            </div>
            <div className="color-swooper">
                <h3>Site color</h3>
                <button onClick={() => changeTheme('classic')} className="classic">Aa</button>
                <button onClick={() => changeTheme('black')} className="black">Aa</button>
                <button onClick={() => changeTheme('book')} className="book">Aa</button>
                <button onClick={() => changeTheme('green')} className="green">Aa</button>
                <button onClick={() => changeTheme('pinky')} className="pinky">Aa</button>
            </div>
            <div className="images-control">
                <h3>Images control</h3>
                <button onClick={() => changeImage('imgVisible')} aria-label="Show classic images">
                    <FontAwesomeIcon icon={faImage} />
                </button>
                <button onClick={() => changeImage('imgGray')} aria-label="Show gray images">
                    <FontAwesomeIcon icon={faCircleHalfStroke} />
                </button>
                <button onClick={() => changeImage('imgHidden')} aria-label="Disable images">
                    <FontAwesomeIcon icon={faBan} />
                </button>
            </div>
            <div className="control-inclusivity">
                <h3>Controls</h3>
                <button onClick={resetSettings} className="inclusivity-reset">Reset</button>
                <button onClick={toggleVisibility} className="inclusivity-hide">Hide</button>
            </div>
        </section>
    )
}

export default Inclusivity;