import { userAccFulfilled,userAccPending,userAccRejected,incre,decre,increByAmount } from "../actions"

export function AccountReducer(state={amount:765},action){
    switch(action.type){
        case userAccFulfilled:
            return {amount:action.payload,pending:false}
        case userAccRejected:
            return {...state,error:action.error,pending:false}
        case userAccPending:
            return {...state,pending:true}
        case incre:
            return {amount:state.amount+1}
        case decre:
            return {amount:state.amount-1}
        case increByAmount:
            return {amount:state.amount+action.payload}
        default:
            return state
    }
}