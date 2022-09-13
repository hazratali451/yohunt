import React, { Component } from "react";
import Slider from "react-slick";

import blogImg1 from '../../images/b1.png'
import blogImg2 from '../../images/b2.png'
import blogImg3 from '../../images/b3.png'

import './Blog.scss'

const Blog = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2,  
                    arrows: true,
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    arrows: true,
                }
            } 
        ]
    };
    return (
        <div className="blog-area">
            <div className="blog-shape">
                <div className="shape1"></div> 
                <div className="shape2"></div> 
                <div className="shape3"></div> 
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slid">
                            <Slider {...settings}>
                                <div className="blog-item">
                                    <div>
                                        <div className="icon"><img src={blogImg1} alt="icon" /></div>
                                        <div className="h5">Game Store</div>
                                        <ul>
                                            <li>Used to buy arrows, upgrades, cosmetic items and skins. </li>
                                            <li>Used to buy a limited amount of first 10 levels on NFTs/ holiday NFTs</li>
                                        </ul> 
                                    </div>
                                </div> 
                                <div className="blog-item">
                                    <div>
                                        <div className="icon"><img src={blogImg2} alt="icon" /></div>
                                        <div className="h5">Marketplace</div>
                                        <ul>
                                            <li>
                                                Used to buy/sell unneeded NFTs by players. (note you can sell even all NFTs including the ones that you are using to hunt now, but doing so will remove your ability to hunt the next level of zombie, reverting player to hunting the level only above the level of highest NFT left in the wallet.)
                                            </li>
                                        </ul> 
                                    </div>
                                </div> 
                                <div className="blog-item">
                                    <div>
                                        <div className="icon"><img src={blogImg3} alt="icon" /></div>
                                        <div className="h5">In-Game Currency</div>
                                        <ul>
                                            <li>
                                                Will be a wrapped YoKen and can be used for purchase of in-game items, upgrades, marketplace transactions etc. All in-game transactions will be executed with that token and will promote usage and adaptation of YoKen
                                            </li>
                                        </ul> 
                                    </div>
                                </div> 
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog