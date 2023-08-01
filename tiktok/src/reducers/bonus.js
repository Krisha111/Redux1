import { increment,increByAmount } from "../actions"

export function BonusReducer(state={points:234},action){
    switch(action.type){
      case increment:
            return {points:state.points+1}
      case increByAmount:
          if(action.payload>100){
          return {points:state.points+10}
    }
      default:
          return state
    }
  }