import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import video from "./videos/background-video.mp4";

function HeroSection() {
    
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1> Adventure Awaits </h1>
            <p> Lets get started! </p>
            <div className="hero-btns">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"/>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' redirectURL="/about-me">&nbsp;ABOUT ME&nbsp;<i class="far fa-arrow-alt-circle-right"/>&nbsp;</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' redirectURL="/contact-me">CONTACT ME&nbsp;<i class="fas fa-address-book"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection
