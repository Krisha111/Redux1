import axios from 'axios'


export const incre="account/incre"
export const decre="account/decre"
export const increByAmount="account/increByAmount"
export const userAccFulfilled="account/Fulfilled"
export const userAccRejected="account/Rejected"
export const userAccPending="account/Pending"
export const increment="bonus/increment"



export function krisha(){
    return {type:incre}
    
}
export function uv(){
    return {type:increment}
  
}
export function mahir(value){
    return {type:increByAmount,payload:value}
}
export function bella(){
    return{type:decre}
}
export function userAccountRejected(error){
    return{type:userAccRejected,error:error}
}
export function userAccountPending(){
    return{type:userAccPending}
}


export function userAccountFulfilled(value){
    return {type:userAccFulfilled,payload:value}
}


export   function getUserAccount(id){
    return async(dispatch,getState)=>{
        try{
            dispatch(userAccountPending())
            const {data}=await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(userAccountFulfilled(data.amount))
        }catch(error){
            dispatch(userAccountRejected(error.message))
        }
   
    }
 }


export function vish(value){
    return{type:increByAmount,payload:value}
   
}