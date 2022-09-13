import React from 'react'

import './HuntProcess.scss'

const HuntProcess = () => { 
    return (
        <div className="hunt-process-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="h2 section-title text-white text-center fw-semibold">
                            Hunt Process
                        </div>
                        <div className="process-content">
                            <div className="process-item">
                                <div className="number">01</div>
                                <p>Each new player joining the game will be given an initial supply of 12 arrows - arrows are not recoverable.  Each zombie can take only 3 shots, and if hunted successfully within those 3 shots, the NFT of that zombie is placed into players in-game inventory. </p>
                            </div>
                            <div className="process-item">
                                <div className="number">02</div>
                                <p>If a zombie is not killed in 3 hits it will escape and will reappear in a random location after 24 hours.</p>
                            </div>
                            <div className="process-item">
                                <div className="number">03</div>
                                <p>If a player runs out of arrows during the hunt, the player can forfeit the hunt or purchase additional arrows from the Game Store.</p>
                            </div>
                            <div className="process-item">
                                <div className="number">04</div>
                                <p>Hit boxes of zombies (area that needs to be hit to capture NFT) decreases inversely with level.  Additionally, hit boxes begin randomizing on the last 10 levels to make the hunt more challenging.</p>
                            </div>
                            <div className="process-item">
                                <div className="number">05</div>
                                <p>All players can see zombies of their current level and below.  If multiple players from multiple levels wish to simultaneously engage a certain zombie, the battle is locked to the player on a first come first serve basis.</p>
                            </div>
                            <div className="process-item">
                                <div className="number">06</div>
                                <p>Queen and Ministers will move much more often and will be extremely hard to hunt. Queen can only be hunted when all the ministers have been successfull.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HuntProcess