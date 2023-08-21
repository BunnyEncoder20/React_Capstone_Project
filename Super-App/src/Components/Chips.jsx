import React from 'react'
import PropTypes from 'prop-types'

import './Styles/Chips.css'
import { AiOutlineClose } from 'react-icons/Ai';


function Chips({chipTitle}) {
  return (
    <div className='chip'>
        <span className='chiptext'>{chipTitle} <AiOutlineClose/></span>
    </div>
  )
}

Chips.propTypes = {
    chipTitle : PropTypes.string
}

export default Chips
