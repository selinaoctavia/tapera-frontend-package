import {
    NOWPLAYINGFETCH,
    NOWPLAYINGSUCCESS,
    NOWPLAYINGFAIL,
  } from '../constants/MovieConstants';

export const nowPlayingFetch = (value: object) => ({ type: NOWPLAYINGFETCH, data: value });
export const nowPlayingSuccess = (value: object) => ({ type: NOWPLAYINGSUCCESS, data: value });
export const nowPlayingFail = (value: object) => ({ type: NOWPLAYINGFAIL, data: value });