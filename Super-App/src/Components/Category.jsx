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

  const [Categories, setCategories] = useState(true);

  // function to verify number of categories selected:
  const countCategories = () => {
    const toggles = [
      ActionToggle, DramaToggle, RomanceToggle,
      ThrillerToggle, WesternToggle, HorrorToggle,
      FantasyToggle, MusicToggle, FictionToggle
    ] ;

    const trueToggles = toggles.filter((toggle)=>{toggle}) ;
    console.log(trueToggles.length);

    if(trueToggles.length<3)
    {  setCategories(()=>{Categories=false}) ; }
    else 
    { setCategories(()=>{Categories=true}) ; }
  }

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
          
        </div>

        <span className={`warning ${ Categories ? 'hidden' : 'show' }`}>
          <PiWarningFill size={30} style={{position:'relative', top:'1%',}}/> Minimum 3 category required 
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
          <Cards cardTitle="Action" cardBg="#FF5209" cardImg={action} toggleFunction={() => setActionToggle(!ActionToggle)} toggleBorder={ActionToggle}/>
          <Cards cardTitle="Drama" cardBg="#D7A4FF" cardImg={drama} toggleFunction={() => setDramaToggle(!DramaToggle)} toggleBorder={DramaToggle}/>
          <Cards cardTitle="Romance" cardBg="#148A08" cardImg={romance} toggleFunction={() => setRomanceToggle(!RomanceToggle)} toggleBorder={RomanceToggle}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Thriller" cardBg="#84C2FF" cardImg={thriller} toggleFunction={() => setThrillerToggle(!ThrillerToggle)} toggleBorder={ThrillerToggle}/>
          <Cards cardTitle="Western" cardBg="#902500" cardImg={western} toggleFunction={() => setWesternToggle(!WesternToggle)} toggleBorder={WesternToggle}/>
          <Cards cardTitle="Horror" cardBg="#7358FF" cardImg={horror} toggleFunction={() => setHorrorToggle(!HorrorToggle)} toggleBorder={HorrorToggle}/>
        </div>
        <div className="cardRow">
          <Cards cardTitle="Fantasy" cardBg="#FF4ADE" cardImg={fantasy} toggleFunction={() => setFantasyToggle(!FantasyToggle)} toggleBorder={FantasyToggle}/>
          <Cards cardTitle="Music" cardBg="#E61E32" cardImg={music} toggleFunction={() => setMusicToggle(!MusicToggle)} toggleBorder={MusicToggle}/>
          <Cards cardTitle="Fiction" cardBg="#6CD061" cardImg={fiction} toggleFunction={() => setFictionToggle(!FictionToggle)} toggleBorder={FictionToggle}/>
        </div>
        
        <button className="next" onClick={countCategories} disabled={!Categories}>
          Next Page 
        </button>
      </div>
    </div>
  )
}

export default Genres