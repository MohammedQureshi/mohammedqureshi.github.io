import React from 'react'
import CardItem from './CardItem'
import './ProjectCard.scss'

import discordbot from '../../images/projects/discordbot.png'
import lwjgl from '../../images/projects/lwjgl.png'
import reactnativelogin from '../../images/projects/reactnativelogin.PNG'
import python from '../../images/projects/python.png'
import react from '../../images/projects/react.png'
import twittermobileclone from '../../images/projects/twittermobileclone.png'
import robot from '../../images/projects/robot.png'
import shapelydemo from '../../images/projects/shapelydemo.PNG'
import game from '../../images/projects/game.png'
import UserManagement from '../../images/projects/UserManagement.PNG'
import TwitterClone from '../../images/projects/TwitterClone.gif'
import TikTokClone from '../../images/projects/TikTokClone.gif'
import FacebookClone from '../../images/projects/FacebookClone.gif'
import YouTubeClone from '../../images/projects/YouTubeClone.gif'
import Portfolio from '../../images/projects/Portfolio.PNG'
import SpotifyClone from '../../images/projects/SpotifyClone.gif'
import spring from '../../images/projects/spring.png'

function ProjectCard() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={SpotifyClone}
                    text='Spotify Clone'
                    label='ReactNative/Typescript'
                    path='https://github.com/MohammedQureshi/SpotifyMobileClone'
                    />
                    <CardItem
                    src={Portfolio}
                    text='GitHub Pages Portfolio'
                    label='React/SASS'
                    path='https://github.com/MohammedQureshi/mohammedqureshi.github.io'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={TikTokClone}
                    text='TikTok Clone'
                    label='React/Typescript'
                    path='https://github.com/MohammedQureshi/TikTokClone'
                    />
                    <CardItem
                    src={FacebookClone}
                    text='Facebook Clone'
                    label='React/Firebase'
                    path='https://github.com/MohammedQureshi/FacebookClone'
                    />
                    <CardItem
                    src={YouTubeClone}
                    text='YouTube Clone'
                    label='React'
                    path='https://github.com/MohammedQureshi/YouTubeClone'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={TwitterClone}
                    text='Twitter Clone'
                    label='React/Firebase'
                    path='https://github.com/MohammedQureshi/TwitterClone'
                    />
                    <CardItem
                    src={lwjgl}
                    text='3D Game Engine made in Java using LWJGL Library'
                    label='Java/LWJGL'
                    path='https://github.com/MohammedQureshi/3D-Game-Development-with-LWJGL'
                    />
                    <CardItem
                    src={game}
                    text='2D Game Engine made in pure Java with A* algorithm'
                    label='Java'
                    path='https://github.com/MohammedQureshi/2D-Game-Development'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    src={UserManagement}
                    text='User Management System'
                    label='SpringBoot/React'
                    path='https://github.com/MohammedQureshi/ReactFrontend'
                    />
                    <CardItem
                    src={shapelydemo}
                    text='Recreating Shapely Demo website'
                    label='Angular'
                    path='https://github.com/MohammedQureshi/ShapelyDemo-Angular'
                    />
                    <CardItem
                    src={twittermobileclone}
                    text='Twitter Mobile clone'
                    label='React-Native'
                    path='https://github.com/MohammedQureshi/TwitterMobileClone'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={discordbot}
                    text='Discord bot with custom functionality'
                    label='NodeJS'
                    path='https://github.com/MohammedQureshi/SythanBot'
                    />
                    <CardItem
                    src={python}
                    text='Collocation and Sentiment Analysis'
                    label='Python'
                    path='https://github.com/MohammedQureshi/Collocation-and-Sentiment-Analysis'
                    />
                    <CardItem
                    src={spring}
                    text='Footballer Management System'
                    label='Spring MVC/Maven/SQL'
                    path='https://github.com/MohammedQureshi/Web-Application-with-Spring'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={robot}
                    text='Robot Juice Web Development'
                    label='HTML/CSS'
                    path='https://github.com/MohammedQureshi/Web-Development-Robot-Juice'
                    />
                    <CardItem
                    src={reactnativelogin}
                    text='Standalone Mobile Application'
                    label='React-Native'
                    path='https://github.com/MohammedQureshi/ReactNativeApp'
                    />
                    <CardItem
                    src={react}
                    text='GitHub Pages'
                    label='ReactJS'
                    path='https://github.com/MohammedQureshi/mohammedqureshi.github.io/tree/5b074179d8a9416f828cc45ed6ec021b6e077bc1'
                    />
                </ul>
                </div>
            </div>
            </div>
    );
}

export default ProjectCard