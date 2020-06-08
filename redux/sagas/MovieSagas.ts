import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import { DefaultAction } from 'configurations/interfaces/redux';
import { NOWPLAYINGENDPOINT } from 'configurations/MovieConfig';
import { NOWPLAYINGFETCH } from '../constants/MovieConstants';
import {
    nowPlayingSuccess,
    nowPlayingFail,
} from '../actions/MovieActions';
import { get } from 'libraries/api';
import axios from 'axios';

function* workerSagaNowPlaying (params: DefaultAction) {
    try {
        const response = yield call(callApi)
        if (response.status === 200 && response.data.results.length > 0) {
            yield put(nowPlayingSuccess(response.data.results));
        } else {
            yield put(nowPlayingFail(response.data.status_message));
        }
    } catch (error) {
        yield put(nowPlayingFail(error.message));
    }
}

function callApi() {
    return  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2cd60e70e23d1aac41f24a242c1e08f8&primary_release_date.gte=2020-06-01&primary_release_date.lte=2020-08-30");

}



export const watcherNowPlaying = [
    takeLatest(NOWPLAYINGFETCH, workerSagaNowPlaying),
];