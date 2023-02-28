import { actionTypes } from '../Constantes/ActionTypes';
import { takeEvery, call, put } from'redux-saga/effects';
import { getInfoByName } from '../api/getInfo';
import { actionResGetInfoByName } from '../Actions/actionGetInfo';



export const watchGetInfoByName = function * (){
    yield takeEvery(actionTypes.GET_INFO_BY_NAME, fetchGetInfoByName)
}

function* fetchGetInfoByName(action){
    try{
        const data = yield call(getInfoByName, action.data)
        if(data){
           yield put(actionResGetInfoByName(data))
        }
    }catch(err){
        console.log(err)
    }
}
