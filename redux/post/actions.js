import {
  ADD_TO_POST_LIST,
  POST_LIST,
} from './const'


export const addToPostList = (data) => ({
  type: ADD_TO_POST_LIST,
  payload: data
});
export const getPostList = (data) => ({
  type: POST_LIST,
  payload: data
});


