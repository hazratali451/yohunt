import React, { Component,useEffect,useRef } from "react";
import Slider from "react-slick";
import nextBtn from '../../images/next-btn.png'
import gameImage from '../../images/setting-phone.png'
import './GameSetting.scss';  
 
const GameSetting = () => { 
    const sliderRef = useRef(null);
    useEffect(()=>{
        console.log(sliderRef.current);
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,  
        arrows: false
    };
    return (
        <div className="setting-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-lg-none">
                        <div className="setting-img mb-5">
                            <img src={gameImage} alt="image" className="responsive" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="h2 section-title text-white fw-semibold">
                            Game Setting
                        </div>
                        <div className="setting-slider-content">
                            <Slider ref={sliderRef} {...settings}>
                                <div className="setting-item">
                                    <p>
                                        Queen P., the all powerful tyrant of our post-apocalyptic landscape, was inspecting her bioweapons lab when an explosion occurred mutating Her and her ministers into zombies.  Even with her unlimited resources, she is unable to reverse her transformation, so she decided to make the world into her new image.  She created a deviant plan to mutate the world's population by infectecting the population gradually in order to control the transition effects from human to zombie
                                    </p>
                                </div>
                                <div className="setting-item">
                                    <p>
                                        Queen P., the all powerful tyrant of our post-apocalyptic landscape, was inspecting her bioweapons lab when an explosion occurred mutating Her and her ministers into zombies.  Even with her unlimited resources, she is unable to reverse her transformation, so she decided to make the world into her new image.  She created a deviant plan to mutate the world's population by infectecting the population gradually in order to control the transition effects from human to zombie
                                    </p>
                                </div>
                                <div className="setting-item">
                                    <p>
                                        Queen P., the all powerful tyrant of our post-apocalyptic landscape, was inspecting her bioweapons lab when an explosion occurred mutating Her and her ministers into zombies.  Even with her unlimited resources, she is unable to reverse her transformation, so she decided to make the world into her new image.  She created a deviant plan to mutate the world's population by infectecting the population gradually in order to control the transition effects from human to zombie
                                    </p>
                                </div> 
                            </Slider>
                            <button className="nextButton text-white" 
                                onClick={()=>sliderRef.current.slickNext()}
                            >
                                Next <span><img src={nextBtn} alt="icon" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSetting