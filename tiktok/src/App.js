import React,{useState} from 'react'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'

export default function App({store}){
  const [account,setAccount]=useState({amount:0})
  const [value,setValue]=useState(0)
  const [bonus,setBonus]=useState({points:0})
  //this state in the useSelector is talking about the glbal state
  const amount=useSelector(state=>state.account)
  const points=useSelector(state=>state.bonus.points)

  return(
   <div className="App">
    <h4>App</h4>
    {account.pending?(<p>loading.....</p>):
    (<p>Hii</p>)
      // account.error?<p>{account.error}</p>:
      // <h3>Current Amount  : {amount.amount}</h3>
    }
   
    <h3>Total Bonus : {points}</h3>
    {/* //simple prop passing from parent to child but here the complexity is very much so to solve this use redux */}
    <Account

    />
    <Bonus 
 
    />
   </div>
  )
}