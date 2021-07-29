import React from 'react'
import CardItem from './CardItem'
import './ProjectCard.scss'

import sample from '../../images/projects/discordbot.png'

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

function ProjectCard() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={TikTokClone}
                    text='TikTok Clone'
                    label='React/Typescript'
                    path='/projects'
                    />
                    <CardItem
                    src={FacebookClone}
                    text='Facebook Clone'
                    label='React/Firebase'
                    path='/projects'
                    />
                    <CardItem
                    src={YouTubeClone}
                    text='YouTube Clone'
                    label='React'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={TwitterClone}
                    text='Twitter Clone'
                    label='React/Firebase'
                    path='/projects'
                    />
                    <CardItem
                    src={lwjgl}
                    text='3D Game Engine made in Java using LWJGL Library'
                    label='Java/LWJGL'
                    path='/projects'
                    />
                    <CardItem
                    src={game}
                    text='2D Game Engine made in pure Java with A* algorithm'
                    label='Java'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem
                    src={UserManagement}
                    text='User Management System'
                    label='SpringBoot/React'
                    path='/projects'
                    />
                    <CardItem
                    src={shapelydemo}
                    text='Recreating Shapely Demo website'
                    label='Angular'
                    path='/projects'
                    />
                    <CardItem
                    src={twittermobileclone}
                    text='Twitter Mobile clone'
                    label='React-Native'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={discordbot}
                    text='Discord bot with custom functionality'
                    label='NodeJS'
                    path='/projects'
                    />
                    <CardItem
                    src={python}
                    text='Collocation and Sentiment Analysis'
                    label='Python'
                    path='/projects'
                    />
                    <CardItem
                    src={Portfolio}
                    text='Updated Portfolio'
                    label='React/SASS'
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
                    src={reactnativelogin}
                    text='Standalone Mobile Application'
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

export default ProjectCard