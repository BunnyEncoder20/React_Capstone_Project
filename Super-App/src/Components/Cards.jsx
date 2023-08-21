import React,{ useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import './Styles/Cards.css'
import WebFont from 'webfontloader';

// Importing the context
import { categoryContext } from '../Context/categoryContext';

function Cards({cardTitle, cardImg, cardBg, toggleFunction}) {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['DM Sans']
          }
        });
      }, []);

    // const {ActionToggle,setActionToggle, DramaToggle, setDramaToggle, RomanceToggle, setRomanceToggle, ThrillerToggle, setThrillerToggle, WesternToggle, setWesternToggle, HorrorToggle, setHorrorToggle, FantasyToggle, setFantasyToggle, MusicToggle, setMusicToggle, FictionToggle, setFictionToggle} = useContext(categoryContext);

    // const handleToggles = (key) => {
    //   switch (key) {
    //     case 'Action':
    //       setActionToggle(!ActionToggle);
    //       break;

    //     case 'Drama' : 
    //       setDramaToggle(!DramaToggle);
    //       break;

    //     case 'Romance' :
    //       setRomanceToggle(!RomanceToggle);
    //       break;

    //     case 'Thriller':
    //       setThrillerToggle(!ThrillerToggle);
    //       break;

    //     case 'Western' : 
    //       setWesternToggle(!WesternToggle);
    //       break;

    //     case 'Horror' :
    //       setHorrorToggle(!HorrorToggle);
    //       break;

    //     case 'Fantasy':
    //       setFantasyToggle(!FantasyToggle);
    //       break;

    //     case 'Music' : 
    //       setMusicToggle(!MusicToggle);
    //       break;

    //     case 'Fiction' :
    //       setFictionToggle(!FictionToggle);
    //       break;
      
    //     default:
    //       break;
    //   }
    // }

    const cardContainerBgStyle = {
      backgroundColor: cardBg || 'white' // Default color is set as white 
    }

  return (
    <div className='cardContainer' style={cardContainerBgStyle} onClick={toggleFunction}>
        <h1 className='cardTitle'>{cardTitle}</h1>
        <img src={cardImg} alt="Card Image" className='cardImg'/>
    </div>
  )
}

Cards.propTypes = {
  cardTitle : PropTypes.string,
  cardImg : PropTypes.string,
  cardBg : PropTypes.string,
  toggleFunction : PropTypes.func
}

export default Cards
