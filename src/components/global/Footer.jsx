import React from 'react'
import footerLogo from '../../images/footer-logo.png'
import { BsFacebook,BsYoutube,BsInstagram,BsDiscord,BsTelegram,BsTwitter } from "react-icons/bs";
import './Footer.scss'
const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <a href="#">
                                    <img src={footerLogo} alt="logo" />
                                </a>
                            </div>
                            <div className="footer-center ms-auto d-lg-flex align-items-center gap-5">
                                <ul className="footer-list d-grid d-lg-flex gap-4 gap-lg-5">
                                    <li><a href="#">Tokenomics</a></li>
                                    <li><a href="#">Whitepaper</a></li>
                                </ul>
                                <div className="footer-social d-flex gap-3">
                                    <a href="#"><BsDiscord/></a>
                                    <a href="#"><BsYoutube/></a>
                                    <a href="#"><BsTelegram/></a>
                                    <a href="#"><BsTwitter/></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer