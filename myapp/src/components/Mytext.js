import React from 'react' //rfc to bring react funtion based components 

export default function Mytext() {
  return (
    <div className='w-full'>
      
        <h1 className="text-xl font-bold w-[80%] mx-auto ">enter text to be edited here</h1>
        <textarea id="message" rows="8" className="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border mt-3 mx-auto shadow-lg shadow-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        
    </div>
  )
}
