"use client"
import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
const TypeWriter2 = ({words,interval,pause,cursorTickRate}) => {
    const rawList = words.map((word)=> (   (word +Array(Math.floor(pause/interval)).fill('*').join('')).replaceAll(' ','_')   ) )
  const rawText = words[0] +Array(Math.floor(pause/interval)).fill('*').join('')
  let myText = rawText.replaceAll(' ','_')
  const [listIndex,setListIndex]=useState(0)
    const [text,setText]=useState(rawList[listIndex])
    const [isCountingUp,setIsCountingUp]=useState(true)
    const [count,setCount]=useState(0)
 
    useEffect(() => {
        const myInterval = setInterval(()=>{
          if (isCountingUp) {
            setCount((prev)=>prev+1)
             

            if (count>=text.length-1){
              setIsCountingUp(false)
              
            }
          }else {
            setCount((prev)=>prev-1)
            

            if (count <=1) {
              setIsCountingUp(true)
            }
          }
          
          //console.log(count,"the count",text.length,isCountingUp,myText)
          if (isCountingUp){
            try {
              let myTag = document.getElementsByClassName(`typer${count}`)[0]
             myTag.style.display="inline"
            }catch(err){
              console.log(err)
            }
            
          }else{
            let myTag = document.getElementsByClassName(`typer${count-1}`)[0]
            myTag.style.display="none"
          }

        },interval)
        
        if (count===0){
            setListIndex((prev)=> (prev+1)%words.length)
            setText(rawList[listIndex])
        }
       return ()=> clearInterval(myInterval)
      }, [count,isCountingUp]);

    
  return (
    <div className='typer'>
       
       {text.split('').map((char,index)=> (
       <span key={index} className={`typer${index}`}>
        {char ==='*'? '': char==='_'? ' ': char} 
       </span>)
       )}

      

      
       <span className='typer-line' style={{animationDuration:cursorTickRate}}>|</span>
     
    </div>
  )
}

export default TypeWriter2