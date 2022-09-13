import React from "react";
import Slider from "react-slick"; 

import weaponsImg1 from '../../images/i1.png'
import weaponsImg2 from '../../images/i2.png'
import weaponsImg3 from '../../images/i3.png'

import './Weapons.scss'

const Weapons = () => { 
    const settings = {
        dots: true,
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
        <div className="weapons-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="h2 section-title fw-semibold text-white text-center">
                            Weapons
                        </div>
                        <div className="weapons-slid">
                            <Slider {...settings}>
                                <div className="weapons-item">
                                    <div>
                                        <div className="icon"><img src={weaponsImg1} alt="icon" /></div>
                                        <div className="h5">Bows/crossbows</div>
                                        <ul>
                                            <li>Player starts with a generic bow and 12 arrows.</li>
                                            <li>Skins for the bow (can be purchased at game store).</li>
                                            <li>Bow shot distance upgrades can be purchased at game store on levels 5/10/15/20/25</li>
                                        </ul> 
                                    </div>
                                </div> 
                                <div className="weapons-item">
                                    <div>
                                        <div className="icon"><img src={weaponsImg2} alt="icon" /></div>
                                        <div className="h5">Armor</div>
                                        <ul>
                                            <li>Most armor is Cosmetic only with and (can be purchased at game stores).</li>
                                            <li>Glasses can be purchased at the game store. They allow to see +2 level of zombie (only to see not to hunt)</li> 
                                        </ul> 
                                    </div>
                                </div> 
                                <div className="weapons-item">
                                    <div>
                                        <div className="icon"><img src={weaponsImg3} alt="icon" /></div>
                                        <div className="h5">Arrows/Bolts</div>
                                        <ul>
                                            <li>Each player starts with [12] arrows</li>
                                            <li>Once arrow supply is depleted, players can purchase additional arrows at the game store, or obtain (5) free arrows at partner locations from the chest (paid for by partner)</li> 
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

export default Weapons