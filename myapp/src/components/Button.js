import React from 'react'
import Mytext,{handleUpClick} from './Mytext'
// import PropTypes from 'prop-types'

export default function Button(props) {
  return (
   <button onClick={handleUpClick} className='mx-auto w-auto  h-auto p-3 bg-purple-300 hover:bg-purple-400 mt-5 shadow-md shadow-black'>{props.name}</button>
  )
}
