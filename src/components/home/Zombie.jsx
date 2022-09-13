import React, { Component,useEffect,useRef } from "react";
import Slider from "react-slick";
import nextBtn from '../../images/next-btn.png'
import zombieImg1 from '../../images/z1.png'
import zombieImg2 from '../../images/z2.png'
import zombieImg3 from '../../images/z3.png'

import './Zombie.scss'

const Zombie = () => {
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
        <div className="zombie-area" id="zombie">
            <div className="zombie-shape">
                <div className="shape1"></div> 
                <div className="shape2"></div> 
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="zombie-image">
                            <div className="zombie-image-item">
                                <img src={zombieImg1} alt="zombie-icon" className='img-fluid' />
                                <div className="h5 text-white mb-2 mt-3">Zombie</div>
                                <p className='text-white'>$ 543,576.13</p>
                            </div>
                            <div className="zombie-image-item">
                                <img src={zombieImg2} alt="zombie-icon" className='img-fluid' />
                                <div className="h5 text-white mb-2 mt-3">Zombie</div>
                                <p className='text-white'>$ 543,576.13</p>
                            </div>
                            <div className="zombie-image-item">
                                <img src={zombieImg3} alt="zombie-icon" className='img-fluid' />
                                <div className="h5 text-white mb-2 mt-3">Zombie</div>
                                <p className='text-white'>$ 543,576.13</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="zombie-content">
                            <div className="h2 section-title fw-semibold text-white">
                                Zombie/NFT location and purchase
                            </div>
                            <div className="zombie-slid">
                                <Slider ref={sliderRef} {...settings}>
                                    <div className="zombie-item">
                                        <p>
                                             Each zombie is a unique NFT. Players can only see and hunt levels of zombies equal to or below the hunters level. This is determined by the highest level of NFT in any player’s inventory.
                                        </p>
                                        <p>
                                            In order to hack upgrades, we will have a game store in which a player can purchase NFTs levels 1-10 (only a limited amount is available for each of the 10 levels).  Upgrades are purchased through native token.
                                        </p>
                                        <p>
                                            The first 20 holders accumulating 100 Million of tokens by the date of game release will be given a unique opportunity to own a Zombie NFT level 17 as soon as the level is released.
                                        </p>
                                        <p>
                                            When 100M tokens are accumulated, players will have to temporarily deposit them into our contract in order to claim a NFT Level 17 (Please note, that only 20 NFT Level 17 will be available on a first come first served basis). The address that makes that deposit will receive the NFT.
                                        </p>
                                    </div>
                                    <div className="zombie-item">
                                        <p>
                                             Each zombie is a unique NFT. Players can only see and hunt levels of zombies equal to or below the hunters level. This is determined by the highest level of NFT in any player’s inventory.
                                        </p>
                                        <p>
                                            In order to hack upgrades, we will have a game store in which a player can purchase NFTs levels 1-10 (only a limited amount is available for each of the 10 levels).  Upgrades are purchased through native token.
                                        </p>
                                        <p>
                                            The first 20 holders accumulating 100 Million of tokens by the date of game release will be given a unique opportunity to own a Zombie NFT level 17 as soon as the level is released.
                                        </p>
                                        <p>
                                            When 100M tokens are accumulated, players will have to temporarily deposit them into our contract in order to claim a NFT Level 17 (Please note, that only 20 NFT Level 17 will be available on a first come first served basis). The address that makes that deposit will receive the NFT.
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
        </div>
    )
}

export default Zombie