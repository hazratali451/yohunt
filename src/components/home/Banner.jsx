import React from 'react'

import Countdown from './Countdown'
import downIcon from '../../images/arrow-down.png'

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="banner-shape">
                <div className="shape1"></div>
                <div className="shape2"></div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="banner-text text-center">
                            <h1 className='text-white fw-bold'>Player vs Environment game on mobile platforms with Augmented Reality content</h1>
                            <a href="#" className="btn-lg mt-4">Play & Earn</a>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="banner-bil">
                            {/* <div className="bil-item border-phone">
                                <p className='text-white-50'>Current Bid</p>
                                <div className="h4 text-primary mb-0 fw-semibold">5.00 eth</div>
                                <p className='text-white'>$11, 373.53</p>
                            </div> */}
                            <div className="bil-item text-center">
                                <p className='text-white-50'>Auction end in</p>
                                <Countdown countDownDate={new Date("September 15, 2022 00:00:00").getTime()} />
                            </div>
                            {/* <div className="bil-item d-grid gap-3 text-center">
                                <a href="#" className="btn-md btn-md-primary">Explore</a>
                                <a href="#" className="btn-md">See Item</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="down-arrow">
                            <a href="#zombie">
                                <img src={downIcon} alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner