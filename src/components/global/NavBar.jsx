import React, { useState,useEffect } from "react";
import LightGallery from 'lightgallery/react'; 
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import logo from '../../images/logo.png'
import bar from '../../images/bar.png'
import play from '../../images/play.png'
import './NavBar.scss'
const NavBar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, []); 
    return (
        <nav className={scroll ? "navbar navbar-expand-lg fixed-top navBarTop navScroll" : "navbar navbar-expand-lg fixed-top navBarTop"}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img src={bar} alt="icon" />
                </button>
                <a className="navbar-brand d-lg-none" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div className="paly-icon d-lg-none">
                    <a className="" data-bs-toggle="modal" data-bs-target="#playModal">
                        <img src={play} alt="icon" />
                    </a>
                    {/* <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade"> 
                        <a className="" data-src="https://www.youtube.com/embed/dwTGlCRy50k" key="4" >
                            <img src={play} alt="icon" />
                        </a>
                    </LightGallery>  */}
                </div>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={logo} alt="logo" />
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body align-items-lg-center">
                        <ul className="navbar-nav justify-content-start flex-grow-1 gap-4">
                            <li className="nav-item">
                                <a className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#tokenomicsModal">tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#whitepaperModal">whitepaper</a>
                            </li> 
                        </ul> 
                        <div className="mx-auto d-none d-lg-block"> 
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="ms-auto d-none d-lg-block"> 
                            <a type="button" class="btn-md btn-md-primary text-white" data-bs-toggle="modal" data-bs-target="#playModal">
                                Play Now
                            </a>
                            {/* <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade"> 
                                <a className="btn-md btn-md-primary text-white" data-src="https://www.youtube.com/embed/dwTGlCRy50k" key="4" >
                                    Play Now
                                </a>
                            </LightGallery>  */}

                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="tokenomicsModal" tabindex="-1" aria-labelledby="tokenomicsModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">  
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                        <div class="modal-body">
                            <div class="modal-body">
                                <div className="h3">Tokenomics</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, odio nihil asperiores sequi error quasi repellendus consectetur quibusdam? Consequatur itaque dolores eligendi est quibusdam nobis modi saepe earum deleniti nam facilis explicabo possimus velit eum natus odio minus architecto, commodi quam molestiae quaerat ab repellat? Voluptatum tempore dolor recusandae fugiat?
                                </p>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div class="modal fade" id="whitepaperModal" tabindex="-1" aria-labelledby="whitepaperModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">  
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                        <div class="modal-body">
                            <div class="modal-body">
                                <div className="h3">Whitepaper</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, odio nihil asperiores sequi error quasi repellendus consectetur quibusdam? Consequatur itaque dolores eligendi est quibusdam nobis modi saepe earum deleniti nam facilis explicabo possimus velit eum natus odio minus architecto, commodi quam molestiae quaerat ab repellat? Voluptatum tempore dolor recusandae fugiat?
                                </p>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div class="modal fade" id="playModal" tabindex="-1" aria-labelledby="playModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content"> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                        <div class="modal-body">
                            <div className="h3">Play Now</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, odio nihil asperiores sequi error quasi repellendus consectetur quibusdam? Consequatur itaque dolores eligendi est quibusdam nobis modi saepe earum deleniti nam facilis explicabo possimus velit eum natus odio minus architecto, commodi quam molestiae quaerat ab repellat? Voluptatum tempore dolor recusandae fugiat?
                            </p>
                        </div> 
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar