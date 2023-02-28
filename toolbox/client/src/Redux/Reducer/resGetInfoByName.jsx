import { actionTypes } from "../Constantes/ActionTypes";

const initialState = {
    data: []
  };
  
  export default function reducerResGetInfoByName(state = initialState, action){
    switch (action.type) {
      case actionTypes.RES_GET_INFO_BY_NAME:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  }