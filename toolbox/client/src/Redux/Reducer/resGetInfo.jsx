import { actionTypes } from "../Constantes/ActionTypes";

const initialState = {
    data: []
  };
  
  export default function reducerResGetInfo(state = initialState, action){
    switch (action.type) {
      case actionTypes.RES_GET_INFO:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  }