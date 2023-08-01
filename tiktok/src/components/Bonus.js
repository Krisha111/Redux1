import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  uv } from '../actions'

export default function Bonus(){
  
 const points= useSelector(state=>state.bonus.points)
  const dispatch=useDispatch()
  
    return(
  <div className='card'>
    <div className='container'>
        <h4>
            <b>Bonus components</b>
        </h4>
        <h3>Total points : {points}</h3>
        <button onClick={()=>dispatch(uv())}>Increment +</button>
    </div>
  </div>
    )
}