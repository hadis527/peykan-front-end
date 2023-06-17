import { combineReducers } from 'redux';
import profile from './profile/reducer';
import post from './post/reducer';

const reducers = combineReducers({
  profile,
  post
});

export default reducers;