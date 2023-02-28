import {all} from "redux-saga/effects"
import { watchGetInfo } from "./watchGetInfo"



export default function * rootSaga() {
    yield all ([
        watchGetInfo()
    ])
}