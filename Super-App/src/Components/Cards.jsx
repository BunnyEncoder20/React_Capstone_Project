import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'

import './Styles/Cards.css'
import WebFont from 'webfontloader';

function Cards({cardTitle, cardImg, cardBg}) {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['DM Sans']
          }
        });
      }, []);

    const cardContainerBgStyle = {
      backgroundColor: cardBg || 'white' // Default color is set as white 
    }

  return (
    <div className='cardContainer' style={cardContainerBgStyle}>
        <h1 className='cardTitle'>{cardTitle}</h1>
        <img src={cardImg} alt="Card Image" className='cardImg'/>
    </div>
  )
}

Cards.propTypes = {
  cardTitle : PropTypes.string,
  cardImg : PropTypes.string,
  cardBg : PropTypes.string
}

export default Cards
