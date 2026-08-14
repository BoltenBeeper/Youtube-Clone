import React from 'react'

export function CatagoriesTop() {
 return (
    <div className="catagories-container">

      <div
        className="arrow icon-container left hidden"
        id="left-arrow-icon"
        onClick={() => scrollByAmount(-380, 'catagories')}
      >
        <div className="arrow icon left">
          <div className="inside-arrow-container">
            <div className="inside-arrow-swipe"></div>
          </div>
          <div className="in-icon-piece one"></div>
          <div className="in-icon-piece two"></div>
          <div className="in-icon-piece three"></div>
          <div className="in-icon-piece four"></div>
          <div className="in-icon-piece five"></div>
          <div className="in-icon-piece six"></div>
          <div className="in-icon-piece seven"></div>
        </div>
      </div>

      <ul className="catagories" id="catagories">
        <li className="catagory selected">All</li>
        <li className="catagory">Gaming</li>
        <li className="catagory">Music</li>
        <li className="catagory">The Elder Scrolls V: Skyrim – Special Edition</li>
        <li className="catagory">Video game development</li>
        <li className="catagory">Scripting Language</li>
        <li className="catagory">News</li>
        <li className="catagory">Blenders</li>
        <li className="catagory">Five Nights at Freddy's</li>
        <li className="catagory">3D computer graphics</li>
        <li className="catagory">Computer Programming</li>
        <li className="catagory">Nintendo</li>
        <li className="catagory">Hytale</li>
        <li className="catagory">Podcasts</li>
        <li className="catagory">Ambient music</li>
        <li className="catagory">C418</li>
        <li className="catagory">Music</li>
        <li className="catagory">Smooth jazz</li>
        <li className="catagory">Comedy</li>
        <li className="catagory">Recently uploaded</li>
        <li className="catagory">Watched</li>
        <li className="catagory">New to you</li>
      </ul>
      
      <div
        className="arrow icon-container right"
        id="right-arrow-icon"
        onClick={() => scrollByAmount(380, 'catagories')}
      >
        <div className="arrow icon right">
          <div className="inside-arrow-container">
            <div className="inside-arrow-swipe"></div>
          </div>
          <div className="in-icon-piece one"></div>
          <div className="in-icon-piece two"></div>
          <div className="in-icon-piece three"></div>
          <div className="in-icon-piece four"></div>
          <div className="in-icon-piece five"></div>
          <div className="in-icon-piece six"></div>
          <div className="in-icon-piece seven"></div>
        </div>
      </div>

    </div>
  )
}