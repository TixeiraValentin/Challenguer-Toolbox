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

export const actionGetInfoByName = (data) => {
    return {
        type: actionTypes.GET_INFO_BY_NAME,
        data: data
    }
}

export const actionResGetInfoByName = (data) => {
    return {
        type: actionTypes.RES_GET_INFO_BY_NAME,
        data: data  
    }
}
