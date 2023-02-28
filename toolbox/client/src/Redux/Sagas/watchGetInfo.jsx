import { actionTypes } from '../Constantes/ActionTypes';
import { takeEvery, call, put } from'redux-saga/effects';
import { getInfo } from '../api/getInfo';
import { actionResGetInfo } from '../Actions/actionGetInfo';



export const watchGetInfo = function * (){
    yield takeEvery(actionTypes.GET_INFO, fetchGetInfo)
}

function* fetchGetInfo(action){
    try{
        const data = yield call(getInfo, action.data)
        if(data){
           yield put(actionResGetInfo(data))
        }
    }catch(err){
        console.log(err)
    }
}
