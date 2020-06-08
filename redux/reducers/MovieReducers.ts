import { DefaultState, DefaultAction } from 'configurations/interfaces/redux';
import { defaultState, defaultAction } from 'configurations/redux';
import { NOWPLAYINGFETCH, NOWPLAYINGSUCCESS, NOWPLAYINGFAIL } from '../constants/MovieConstants';

const ReducerNowPlayingDashboard = (state: DefaultState = defaultState, action: DefaultAction = defaultAction) => {
    switch (action.type) {
      case NOWPLAYINGFETCH:
        return {
          ...state,
          fetch: true,
          data: action.data,
          action: action.type,
        };
  
      case NOWPLAYINGSUCCESS:
        return {
          ...state,
          fetch: false,
          response: action.data,
          action: action.type,
        };
  
      case NOWPLAYINGFAIL:
        return {
          ...state,
          fetch: false,
          error: action.data,
          action: action.type,
        };
  
      default:
        return state;
    }
  }

export default ReducerNowPlayingDashboard;
