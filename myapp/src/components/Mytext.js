import React,{useState} from 'react' //rfc to bring react funtion based components 
import Button from './Button'
//if ur caps lock is broken or stays always on or off dont worry we've got you covered with this universal problem solving app u can convert any text to uppercase or lower case you just have to type text and click a button or press caps lock oh i forgot you dont have one sike and without reloading because you only have {noOfYourBrainCell}KBps internet speed
// as if you have to reload for that in javasctipt haha 
export default function Mytext() {
  
  const [text,setText]=useState("enter text here");
  const handleUpClick=()=>{
    console.log("up click")
  }
  const handleOnChange=()=>{
    console.log("up click")
  }
  return (
    
    <div className='w-full'>

        <h1 className="text-xl font-bold w-[80%] mx-auto ">enter text to be edited here</h1>
        <textarea value={text} onChange={handleOnChange} id="message" rows="10"  className="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border mt-3 mx-auto shadow-lg shadow-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <div className="flex justify-center">
     <div className='w-[80%] flex justify-center align-middle'>
      <Button name="convert to uppercase"/>
      <Button name="convert to lowercase"/>
      <Button name="clear"/>
      <Button name="remove spaces"/>
      </div>
      </div>
    </div>
  )
}
export const handleUpClick=()=>{
  console.log("up click")
}
