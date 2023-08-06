import { call, put, takeLatest } from 'redux-saga/effects';
import { getRandomAdvice } from '@domain/api';
import { setAdvice, setLoading } from './actions';
import { GET_ADVICE } from './constants';

export function* doGetAdvice() {
  yield put(setLoading(true));
  try {
    const response = yield call(getRandomAdvice);
    yield put(setAdvice(response.slip));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  // saga
  yield takeLatest(GET_ADVICE, doGetAdvice);
}
