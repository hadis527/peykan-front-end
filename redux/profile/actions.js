import {
  UPDATE_PROFILE_INFO,
  GET_PROFILE_INFO,
} from './const'

export const getProfileInfo = (data) => ({
  type: GET_PROFILE_INFO,
  payload: data
});
export const updateProfileInfo = (data) => ({
  type: UPDATE_PROFILE_INFO,
  payload: data
});


