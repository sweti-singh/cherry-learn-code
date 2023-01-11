import React from "react";
import img from '../Images/img1.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import '../App.css'

function Header() {
    return (
        <div className="header">
            <div className="img">
                <img src={img} alt='img'></img>
            </div>
            <div className="details">
                <div><p>Home</p></div>
                <div><p>About</p></div>
                <div><BiSearchAlt2 className="logo" /></div>
                <div><p>Contact us</p></div>
            </div>
        </div>
    )

}

export default Header; 