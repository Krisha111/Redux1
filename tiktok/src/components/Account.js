import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  krisha, bella, mahir, getUserAccount } from '../actions'

export default function Account(){
  const [value,setValue]=useState(0)

  const amount=useSelector(state=>state.account.amount)
  const points=useSelector(state=>state.bonus.points)
 
  const dispatch=useDispatch()
    return(
        <div className="card">
          <div className="container">
            <h4>
                <b>Account Component</b>
            </h4>
            <h3>Amount:${amount}</h3>
            <button onClick={()=>dispatch(krisha())}>Increment +</button>
            <button onClick={()=>dispatch(bella())}>Decrement -</button>
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch(mahir(value))}>Increment by {value}</button>
            <button onClick={()=>dispatch(getUserAccount(1))}>init account</button>
          </div>
        </div>
    )
}
