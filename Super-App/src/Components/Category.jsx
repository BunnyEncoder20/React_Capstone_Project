import React, { useState, useEffect, useContext } from 'react'
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

// importing the context
import { categoryContext } from '../Context/categoryContext'

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
        <categoryContext.Provider value={{ActionToggle,setActionToggle, DramaToggle, setDramaToggle, RomanceToggle, setRomanceToggle, ThrillerToggle, setThrillerToggle, WesternToggle, setWesternToggle, HorrorToggle, setHorrorToggle, FantasyToggle, setFantasyToggle, MusicToggle, setMusicToggle, FictionToggle, setFictionToggle}}>
          <div className="chipRows">
            { ActionToggle && <Chips chipTitle={'Action'} toggleFunc={()=>setActionToggle(!ActionToggle)}/>}
            { DramaToggle && <Chips chipTitle={'Drama'} toggleFunc = {()=>setDramaToggle(!DramaToggle)} />}
            { RomanceToggle && <Chips chipTitle={'Romance'} toggleFunc={()=>setRomanceToggle(!RomanceToggle)} />}
          </div>
          <div className="chipRows">
            { ThrillerToggle && <Chips chipTitle={'Thriller'} toggleFunc={()=>setThrillerToggle(!ThrillerToggle)}/>}
            { WesternToggle && <Chips chipTitle={'Western'} toggleFunc={()=>setWesternToggle(!WesternToggle)}/>}
            { HorrorToggle && <Chips chipTitle={'Horror'} toggleFunc={()=>setHorrorToggle(!HorrorToggle)} />}
          </div>
          <div className="chipRows">
            { FantasyToggle && <Chips chipTitle={'Fantasy'} toggleFunc={()=>setFantasyToggle(!FantasyToggle)} />}
            { MusicToggle && <Chips chipTitle={'Music'} toggleFunc={()=>setMusicToggle(!MusicToggle)} />}
            { FictionToggle && <Chips chipTitle={'Fiction'} toggleFunc={()=>setFictionToggle(!FictionToggle)} />}
          </div>
          </categoryContext.Provider>
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
        <categoryContext.Provider value={{ActionToggle,setActionToggle, DramaToggle, setDramaToggle, RomanceToggle, setRomanceToggle, ThrillerToggle, setThrillerToggle, WesternToggle, setWesternToggle, HorrorToggle, setHorrorToggle, FantasyToggle, setFantasyToggle, MusicToggle, setMusicToggle, FictionToggle, setFictionToggle}}>
        <div className="cardRow">
          <Cards cardTitle="Action" cardBg="#FF5209" cardImg={action} toggleFunction={() => setActionToggle(!ActionToggle)}/>
          <Cards cardTitle="Drama" cardBg="#D7A4FF" cardImg={drama} toggleFunction={() => setDramaToggle(!DramaToggle)}/>
          <Cards cardTitle="Romance" cardBg="#148A08" cardImg={romance} toggleFunction={() => setRomanceToggle(!RomanceToggle)}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Thriller" cardBg="#84C2FF" cardImg={thriller} toggleFunction={() => setThrillerToggle(!ThrillerToggle)}/>
          <Cards cardTitle="Western" cardBg="#902500" cardImg={western} toggleFunction={() => setWesternToggle(!WesternToggle)}/>
          <Cards cardTitle="Horror" cardBg="#7358FF" cardImg={horror} toggleFunction={() => setHorrorToggle(!HorrorToggle)}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Fantasy" cardBg="#FF4ADE" cardImg={fantasy} toggleFunction={() => setFantasyToggle(!FantasyToggle)}/>
          <Cards cardTitle="Music" cardBg="#E61E32" cardImg={music} toggleFunction={() => setMusicToggle(!MusicToggle)}/>
          <Cards cardTitle="Fiction" cardBg="#6CD061" cardImg={fiction} toggleFunction={() => setFictionToggle(!FictionToggle)}/>
        </div>
        </categoryContext.Provider>
        <button className="next">
          Next Page 
        </button>
      </div>
    </div>
  )
}

export default Genres