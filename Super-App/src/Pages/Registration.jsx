import React,{useEffect} from 'react'
import './Registration.css'

import partyImg from '../assets/party image.png'
import WebFont from 'webfontloader';  // installed webfontloader package for the font to be loaded directly from the Google Fonts website

 

function Registration() {

    // Calling in the fonts using useEffect Hook 
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'Single Day','DM Sans']
          }
        });
    }, []);


  return (
    <div className='loginbody'>

        <div className="lhs">
            {/* Left side of the Page */}

            <img src={partyImg} alt="partImg.exe has stopped working" />
            <div className="discover">
                <h1>Discover New Things on Super App</h1>
            </div>
        </div>

        <div className="rhs">
            {/* Right Side of the Page */}
            
            <div className='title'>
                <h1>Super App</h1>
                <span className='sub_title'>Login to your account</span>
            </div>

            <form className='formElement'>
                <input type="text" placeholder='Name'/>
                <br />
                <input type="text" placeholder='Username'/>
                <br />
                <input type="text"  placeholder='Email'/>
                <br />
                <input type="text" placeholder='Mobile'/>
                <br />
                <div className='chkbox'>
                    <input type="checkbox" name="sharedata" id="sharedata" /><label htmlFor="sharedata">Share my data with Superapp</label>
                </div>
                <br /><br />
                <button className='signup_btn'>Sign up</button>
                <br />
                <div className='termsNconditions'>
                    <p>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
                    <br />
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration