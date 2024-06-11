import React, { useState, useRef } from 'react'
import './Color.css'
import ColorOne from './ColorOne'

export default function Color() {
  const [colors,setColor]=useState()
  const [onecolor,setOnecolor]=useState('blue')

  const changeColor=()=>{
      if(colors==''){
        setColor('red')
      }else if(colors=='red'){
        setColor('green')
      }else if(colors=='green'){
        setColor('blue')
      }else {
        setColor(colors=='')
      }
  }

  function changeBabu(){
    if(onecolor=='blue'){
      setOnecolor('green')
    }else if(onecolor=='green'){
      setOnecolor('red')
    }else if(onecolor=='red'){
      setOnecolor('black')
    }else {
      setOnecolor(onecolor=='blue')
    }
  }
  return (
    <>
        <div style={{backgroundColor:colors}} className='name' onClick={changeColor} >
        <h2>dkl</h2>
        
      </div>
      <ColorOne colors={onecolor} ramesh={changeBabu} />
    </>
  
  )
}
