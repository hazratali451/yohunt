import React from 'react'
import icon from '../../images/next-btn.png'
import up from '../../images/up.png'
import './CallToAction.scss'
const CallToAction = () => {
    return (
        <div className="call-action-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="text text-center">
                            <div className="h2 mb-5 section-title fw-semibold text-white">
                                Stay in the loop
                            </div>
                            <div className="call-form">
                                <input type="email" name="email" placeholder='info@gmail.com' />
                                <button type="submit"><img src={icon} alt="icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="scroll-content">
                                <a href="#">
                                    <img src={up} alt="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction