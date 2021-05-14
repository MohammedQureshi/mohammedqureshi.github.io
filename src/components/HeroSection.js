import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import video from "./videos/background-video.mp4";
import Typical from 'react-typical'
import SliderExperiance from './slider-experiance/SliderExperiance'

function scrollPage(pageNumber){
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) *pageNumber;
    window.scrollTo({
        top: height,
        behavior: 'smooth'     
    })
}
function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                    <div className="centre-text">
                        <div className='typewriter'><h1> LOOKING FOR A DEVELOPER </h1></div>
                        <div className='typewriter'>
                            <h1> That is {' '}</h1>
                            <Typical
                                steps={['Enthusiastic', 2000, 'Hard Working', 2000, 'Motivated', 2000, 'Consistent', 2000,'Accountable', 2000]}
                                loop={Infinity}
                                wrapper="h1"
                                className="typingtext"/>
                        </div>
                    </div>
                    <div className="scroll-about-me" onClick={() => scrollPage(1)}>
                        <p> Scroll Down </p>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    
            </div>
            <div className='aboutme'>
                    <h1> Under Construction</h1>
                    <div className="scroll-about-me" onClick={() => scrollPage(2)}>
                        <p> Scroll Down </p>
                        <i class="fas fa-chevron-down"></i>
                    </div>
            </div>
            <div className='random'>
                <h1> Under Construction</h1>
                <div className="scroll-about-me" onClick={scrollPage}>
                    <p> Back to the Top </p>
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
