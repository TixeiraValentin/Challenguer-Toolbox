import {all} from "redux-saga/effects"
import { watchGetInfo } from "./watchGetInfo"
import { watchGetInfoByName } from "./watchGetInfoByName"



export default function * rootSaga() {
    yield all ([
        watchGetInfo(),
        watchGetInfoByName()
    ])
}