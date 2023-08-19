import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'

import './Styles/Cards.css'
import WebFont from 'webfontloader';

function Cards(props) {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['DM Sans']
          }
        });
      }, []);

  return (
    <div className='cardContainer'>
        <h1 className='cardTitle'>Title</h1>
        <img src="https://picsum.photos/200/100" alt="Card Image" className='cardImg'/>
    </div>
  )
}

Cards.propTypes = {}

export default Cards
