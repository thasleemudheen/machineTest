import React,{useReducer} from "react";

const initailState=0;

const reducer=(state,action)=>{
    switch(action){
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        case 'reset':
            return 0;
        default:null;
    }
}

const Reduces=()=>{
    const [count,dispatch]=useReducer(reducer,initailState)


    return (
        <div>
            <h2>reducers</h2>
            <h2>{count}</h2>
            <button onClick={()=>dispatch('add')}>add</button>
            <button onClick={()=>dispatch('minus')}>minus</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}


export default Reduces