import React from 'react' 
import LightGallery from 'lightgallery/react'; 
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import image from '../../images/zombi-b.png'

import './GameTeaser.scss'

const GameTeaser = () => { 
    return (
        <div className="game-teaser-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <div className="h2 section-title text-white fw-semibold">
                                Game teaser
                            </div>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            <br className='d-none d-lg-block' /> do eiusmod tempor incididunt ut labore et dolore magna 
                            <br className='d-none d-lg-block' /> aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="game-video text-center mt-5"> 
                         
                            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade"> 
                                <a className="game-item" data-src="https://www.youtube.com/embed/dwTGlCRy50k" key="4" >
                                    <img src={image} style={{ maxWidth: '100%' }} className="img-responsive" alt="img" />
                                </a>
                            </LightGallery> 
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameTeaser