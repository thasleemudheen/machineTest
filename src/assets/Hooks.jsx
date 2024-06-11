import React,{useState} from 'react'
import { useEffect,useRef } from 'react'

export default function Hooks() {

  const [todo,setTodo]=useState('')
  const [input,setInput]=useState([])
  const [deleted,setDeleted]=useState([])
  const [count,setCount]=useState(0)
  const [istrue,setIsTrue]=useState(false)

  const [malay,setMalay]=useState(0)

  const countRef=useRef(null)

 if(countRef.current){
  countRef.current.style.color='red';
 }

  const handleChange=(e)=>{
    setTodo(e.target.value)
    
  }
  const saveTodo=()=>{
    setInput([...input,todo])
    setTodo('')

  }
  const deleteFunc=(i)=>{
    const value=input[i]
    setDeleted([...deleted,value])
     const filter=input.filter((v,index)=>{
      return index!==i
     })
     setInput(filter)
  }


  
    useEffect(()=>{
      if(istrue){
        setTimeout(() => {
          setCount(count=>count+1)
        }, 1000);
      }
     })

  const startCount=()=>{
    setIsTrue(true)
  }


const restartButton=()=>{
  setCount(0)
}
 
const stopButton=()=>{
    setIsTrue(false)
}

  return (
    <div>
      <h1>{malay}</h1>
      <button onClick={()=>setMalay(malay+1)}>+</button>
{  <button onClick={()=> {if(malay>0) {setMalay(malay-1 )}} }>-</button>}
      <h2 ref={countRef} id='count'>count</h2>
       <h4>{count}</h4>
       <button onClick={startCount}>start</button>
       <button onClick={stopButton}>stop</button>
       <button onClick={restartButton}>restart</button>

      <h2>TODO</h2>

      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={saveTodo}>click</button>

    <ul>
      {input.map((val,i)=>(
        <li key={i}>{val} <button onClick={()=>deleteFunc(i)}>delete</button></li>
      ))}
    </ul>
    <h3>deleted</h3>
    <ul>
      {deleted.map((val,i)=>(
        <li key={i}>{val} </li>
      ))}
    </ul>
    </div>
  )
}
