import { fork, all } from 'redux-saga/effects';
import taskSaga from './index';
function* rootSaga() {
    yield all([yield fork(taskSaga)]);
}

export default rootSaga;
