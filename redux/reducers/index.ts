import TestReducers from 'redux/reducers/TestReducers';
import MovieReducers from 'redux/reducers/MovieReducers';

const reducers: object = {
  test: TestReducers,
  nowPlaying: MovieReducers,
};

export default reducers;
