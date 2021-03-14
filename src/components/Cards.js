import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from './images/lwjgl.png';
import img2 from './images/game.png';
import img3 from './images/discordbot.png';
import img4 from './images/python.png';
import img8 from './images/spring.png';
import robot from './images/robot.png';
import react from './images/react.png';
import springreact from './images/springreact.png';
import reactnative from './images/reactnative.png';
import fourofour from './images/404.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>CHECK OUT MY PROJECTS</h1>
            <a href="https://github.com/MohammedQureshi"><p className="URL"> https://github.com/MohammedQureshi </p></a>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={img9}
                    text='3D Game Engine made in Java using LWJGL Library'
                    label='LWJGL'
                    path='/projects'
                    />
                    <CardItem
                    src={img2}
                    text='2D Game Engine made in pure Java with A* algorithm'
                    label='Java'
                    path='/projects'
                    />
                    <CardItem
                    src={springreact}
                    text='SpringBoot Backend, React JS Frontend'
                    label='SpringBoot/React'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={img3}
                    text='Discord bot with custom functionality'
                    label='Javascript'
                    path='/projects'
                    />
                    <CardItem
                    src={img4}
                    text='Collocation and Sentiment Analysis'
                    label='Python'
                    path='/projects'
                    />
                    <CardItem
                    src={img8}
                    text='Web Application in Spring with a SQL and Java backend'
                    label='Spring MVC'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={robot}
                    text='Robot Juice Web Development'
                    label='HTML/CSS'
                    path='/projects'
                    />
                    <CardItem
                    src={reactnative}
                    text='Twitter clone'
                    label='React-Native'
                    path='/projects'
                    />
                    <CardItem
                    src={react}
                    text='GitHub Pages'
                    label='ReactJS'
                    path='/projects'
                    />
                </ul>
                </div>
            </div>
            </div>
    );
}

export default Cards
