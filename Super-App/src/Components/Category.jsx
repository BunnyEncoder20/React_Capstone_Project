import React, { useState, useEffect } from 'react'
import './Styles/Category.css'
import Cards from './Cards';

import WebFont from 'webfontloader';  // installed webfontloader package for the font to be loaded directly from the Google Fonts website
import {PiWarningFill} from 'react-icons/pi'


function Genres() {

  // Calling in the fonts using useEffect Hook 
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Single Day', 'DM Sans']
      }
    });
  }, []);


  return (
    <div className='body'>
      <div className="lhs">
        {/* Left side of the page */}

        <div className='title'>
          <h1>Super App</h1>
        </div>

        <h1>Choose your entertainment category</h1>

        <div className="categoryChips">
          <p>Action</p>
          <p>Romance</p>
          <p>Music</p>
        </div>

        <span className="warning">
          <PiWarningFill/> Minimum 3 category required 
        </span>
      </div>

      <div className="rhs">
        {/* Right side of the page */}
        <Cards/>

        <button className="next">
          Next Page 
        </button>
      </div>
    </div>
  )
}

export default Genres