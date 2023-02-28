import { actionTypes } from "../Constantes/ActionTypes";

export const actionGetInfo = () => {
    return {
        type: actionTypes.GET_INFO,
    }
}

export const actionResGetInfo = (data) => {
    return {
        type: actionTypes.RES_GET_INFO,
        data: data  
    }
}