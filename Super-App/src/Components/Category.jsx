import React, { useState, useEffect } from 'react'
import './Styles/Category.css'

import Cards from './Cards';
import Chips from './Chips';

import WebFont from 'webfontloader';  // installed webfontloader package for the font to be loaded directly from the Google Fonts website
import {PiWarningFill} from 'react-icons/pi'

// Importing the Images from assets folder
import action from '../assets/action.png'
import drama from '../assets/Drama.png'
import romance from '../assets/Romance.png'
import thriller from '../assets/Thriller.png'
import western from '../assets/Western.png'
import horror from '../assets/Horror.png'
import fantasy from '../assets/Fantasy.png'
import music from '../assets/Music.png'
import fiction from '../assets/Fiction.png'

function Genres() {

  // Calling in the fonts using useEffect Hook 
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Single Day', 'DM Sans']
      }
    });
  }, []);

  // Creating Chipset toggles 
  const [ActionToggle, setActionToggle] = useState(false);
  const [DramaToggle, setDramaToggle] = useState(false);
  const [RomanceToggle, setRomanceToggle] = useState(false);
  const [ThrillerToggle, setThrillerToggle] = useState(false);
  const [WesternToggle, setWesternToggle] = useState(false);
  const [HorrorToggle, setHorrorToggle] = useState(false);
  const [FantasyToggle, setFantasyToggle] = useState(false);
  const [MusicToggle, setMusicToggle] = useState(false);
  const [FictionToggle, setFictionToggle] = useState(false);


  return (
    <div className='body'>
      <div className="lhs">
        {/* Left side of the page */}

        <div className='title'>
          <h1>Super App</h1>
        </div>

        <h1 className='Choose'>Choose your entertainment category</h1>

        <div className="chips">
          <div className="chipRows">
            { ActionToggle && <Chips chipTitle={'Action'}/>}
            { DramaToggle && <Chips chipTitle={'Drama'}/>}
            { RomanceToggle && <Chips chipTitle={'Romance'}/>}
          </div>
          <div className="chipRows">
            { ThrillerToggle && <Chips chipTitle={'Thriller'}/>}
            { WesternToggle && <Chips chipTitle={'Western'}/>}
            { HorrorToggle && <Chips chipTitle={'Horror'}/>}
          </div>
          <div className="chipRows">
            { FantasyToggle && <Chips chipTitle={'Fantasy'}/>}
            { MusicToggle && <Chips chipTitle={'Music'}/>}
            { FictionToggle && <Chips chipTitle={'Fiction'}/>}
          </div>
        </div>

        <span className="warning">
          <PiWarningFill size={30} /> Minimum 3 category required 
          {/* 
            Using size attribute of icons, you can change the size of the icons 
            Easiest weay to customize the icons : 
            <PiWarningFill size={30} style={{ fill: 'black' }} />
          */}
        </span>
      </div>

      <div className="rhs">
        {/* Right side of the page */}
        <div className="cardRow">
          <Cards cardTitle="Action" cardBg="#FF5209" cardImg={action} onClick={()=>setActionToggle(!ActionToggle)}/>
          <Cards cardTitle="Drama" cardBg="#D7A4FF" cardImg={drama}/>
          <Cards cardTitle="Romance" cardBg="#148A08" cardImg={romance}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Thriller" cardBg="#84C2FF" cardImg={thriller}/>
          <Cards cardTitle="Western" cardBg="#902500" cardImg={western}/>
          <Cards cardTitle="Horror" cardBg="#7358FF" cardImg={horror}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Fantasy" cardBg="#FF4ADE" cardImg={fantasy}/>
          <Cards cardTitle="Music" cardBg="#E61E32" cardImg={music}/>
          <Cards cardTitle="Fiction" cardBg="#6CD061" cardImg={fiction}/>
        </div>

        <button className="next">
          Next Page 
        </button>
      </div>
    </div>
  )
}

export default Genres