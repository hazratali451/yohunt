import React from 'react'
import Footer from '../components/global/Footer'
import NavBar from '../components/global/NavBar'
import Banner from '../components/home/Banner'
import Blog from '../components/home/Blog'
import CallToAction from '../components/home/CallToAction'
import GameSetting from '../components/home/GameSetting'
import GameTeaser from '../components/home/GameTeaser'
import HuntProcess from '../components/home/HuntProcess'
import Weapons from '../components/home/Weapons'
import Zombie from '../components/home/Zombie'

const Home = () => {
    return (
        <>
            <NavBar/>
            <Banner/>
            <GameSetting/>
            <Zombie/>
            <HuntProcess/>
            <Weapons/>
            <Blog/>
            <GameTeaser/>
            <CallToAction/>
            <Footer/>
        </>
    )
}

export default Home