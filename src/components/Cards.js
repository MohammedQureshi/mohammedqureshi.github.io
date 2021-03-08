import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from './images/lwjgl.png';
import img2 from './images/game.png';
import img3 from './images/discordbot.png';
import img4 from './images/python.png';
import img8 from './images/spring.png';
import fourofour from './images/404.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>CHECK OUT MY PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={img9}
                    text='3D Game Engine made in Java using LWJGL Library'
                    label='LWJGL'
                    path='/services'
                    />
                    <CardItem
                    src={img2}
                    text='2D Game Engine made in pure Java with A* algorithm'
                    label='Java'
                    path='/404'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={img3}
                    text='Discord bot with custom functionality'
                    label='Javascript'
                    path='/404'
                    />
                    <CardItem
                    src={img4}
                    text='Collocation and Sentiment Analysis'
                    label='HTML/CSS'
                    path='/404'
                    />
                    <CardItem
                    src={img8}
                    text='Web Application in Spring with a SQL and Java backend'
                    label='Spring MVC'
                    path='/404-up'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={fourofour}
                    text='Robot Juice Web Development'
                    label='HTML/CSS'
                    path='/404'
                    />
                    <CardItem
                    src={fourofour}
                    text='Space Invaders in Java'
                    label='Java'
                    path='/404'
                    />
                    <CardItem
                    src={fourofour}
                    text='Twitter clone'
                    label='React-Native'
                    path='/404-up'
                    />
                    <CardItem
                    src={fourofour}
                    text='GitHub Pages'
                    label='React'
                    path='/404-up'
                    />
                </ul>
                </div>
            </div>
            </div>
    );
}

export default Cards
