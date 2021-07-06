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
            <p>I'll be your developer today.</p>

        </div>
        <div class="under-construction">
        <h1><i class="fas fa-hard-hat"></i> My apologies. This site is under construction, but feel free to look around when wearing a hard hat.</h1>
        </div>
        </>
    )
}