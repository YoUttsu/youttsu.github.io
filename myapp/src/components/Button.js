import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
   
        <button className='mx-3 w-auto ml-{props.ml} h-auto p-3 bg-purple-300 hover:bg-purple-400 mt-5'>{props.name}</button>
  )

}
Button.defaultProps = {
    ml:"auto"
}
