import React from 'react'
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
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>CONTACT ME</Button>
            </div>
        </div>
    )
}

export default HeroSection
