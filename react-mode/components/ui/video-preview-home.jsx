import React from 'react'

export function VideoPreviewHome() {
    return (
         <div className="video-preview-container">
            <div className="highlight"></div>
            <img 
                className="video-thumbnail"
                src="https://i.ytimg.com/vi/oUN7GiviV44/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA0-DNhsEZ_3pAJ9Tp3SsonPUwssw"
                />
            <div className="video-details-container">
                <div className="channel-icon-container">
                    <img 
                        className="channel-icon"
                        src="https://yt3.ggpht.com/NQB2LfIzLAxxUASSgYDLFNFOsZkBsoG2a9o69cl8rANnJou_qS176-MVflNuULV9LOD00oBa8Q=s68-c-k-c0x00ffffff-no-rj"
                        />
                </div>
                <div className="video-text-container">
                    <h3 className="video-title">
                        <a href="#">
                            <span>Game Theory: FNAF, What's ACTUALLY in the Box?</span>
                        </a>
                    </h3>
                    <div className="channel-name">
                        <span>
                            <a href="#">The Game Theorists &#10003</a>
                        </span>
                    </div>
                    <div className="video-stats">
                        <p className="video-stats">766K views &#183; 1 day ago</p>
                    </div>
                </div>
                <div className="three-dot icon-container">
                    <div className="three-dot icon">
                        <div className="in-icon-dot one"></div>
                        <div className="in-icon-dot two"></div>
                        <div className="in-icon-dot three"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}