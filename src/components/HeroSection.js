import React from 'react';
import '../App.css'
import { Button } from "./Button";
import './HeroSection.css';

export default function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                {/* <img className="banner_img" src={require('/images/banner_pic.jpg')} alt="mountain_banner"></img> */}

                {/* <img className="banner_img" src="../src/images/banner_pic.jpg" alt="mountain_banner"></img> */}
                <h3>Hi, I'm Minh!</h3>
                <p className="hero-fade">I'll be your developer today.</p>

            </div>

            {/* UNDER CONSTRUCTION SIGN */}
            {/* <div className="under-construction">
                <i class="fas fa-hard-hat"></i><i class="fas fa-hard-hat"></i><i class="fas fa-hard-hat"></i>
            </div>
            
            <div className="under-construction construction">My apologies. This site is under construction, but feel free to look around when wearing a hard hat.</div> */}
            
        </>
    )
}