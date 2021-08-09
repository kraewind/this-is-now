import {GET_READY_TO_STORE_SCORES, STORE_SCORES, DELETE_VALUE_FROM_SCORES, GET_READY_TO_DELETE_VALUE_FROM_SCORES} from "../actions/actionTypes"


export const scores = (state = {scores: [], requesting: false}, action) => {
    switch(action.type){
        case GET_READY_TO_STORE_SCORES:
            // debugger
            return {
                ...state,
                requesting: true
            }
        case STORE_SCORES:
            debugger
            return {...state,
                scores: action.payload,
                requesting: false
            }   

        case GET_READY_TO_DELETE_VALUE_FROM_SCORES:
            // debugger
            return {
                ...state,
                requesting: true
            }
        case DELETE_VALUE_FROM_SCORES:
            debugger
            return {
                scores: [...state.scores.filter(score => score.attributes.value_id !== action.payload)],
                requesting: false
            }        
        default:
            return state
    }
}