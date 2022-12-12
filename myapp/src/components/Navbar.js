import React from 'react'//imr

import PropTypes from 'prop-types' //impt

export default function Navbar(props) {
  return (
    <div>
       <nav>
        <ul className='flex space-x-2 justify-end bg-pink-600 text-gray-200 align-middle'>
          <li className='flex align-middle justify-start'><img src={require('./logo.png')} className='w-16 h-12 p-auto m-auto bg-pink-600 mr-[78rem]' alt="" srcset="" /></li>
          <li className='m-3 px-3 hover:bg-pink-700 hover:cursor-pointer text'>{props.first}</li>
          <li className='m-3 px-3 hover:bg-pink-700 hover:cursor-pointer text'>{props.fourth}</li>
          <li className='m-3 px-3 hover:bg-pink-700 hover:cursor-pointer text'>{props.third}</li>
          <li className='m-3 px-3 hover:bg-pink-700 hover:cursor-pointer text'>{props.second}</li>
        </ul>
      </nav>
    </div>
  )
}
Navbar.propTypes= {first: PropTypes.string.isRequired,//is required property works when there is no dafault and we dont give props form calling element either
                    second :PropTypes.string}
                        // this prevents us from accidently giving wrong datatype to props  
Navbar.defaultProps = {
    first:'set 1st heading from left',
    second:'set 2nd ',
    third:'set 3',
    fourth:'4'
}
//this is for setting default properties 