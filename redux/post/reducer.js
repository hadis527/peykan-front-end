import {
    ADD_TO_POST_LIST,
    POST_LIST
} from './const';
import RecordController from '../../controllers/RecordController';
const INIT_STATE = {
    postList: [
        {
            id: 1,
            profilePicture: "/images/profile.jfif",
            content: "Hadis",
            timestamp: "456"
          },
          {
            id: 2,
            profilePicture: "/images/profile.jfif",
            content: "Hadis",
            timestamp: "123"
          },
          {
            id: 3,
            profilePicture: "/images/profile.jfif",
            content: "Hadis",
            timestamp: "123"
          },
          {
            id: 3,
            profilePicture: "/images/profile.jfif",
            content: "Hadis",
            timestamp: "123"
          }
    ],

};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case POST_LIST:
            return {
                ...state,
                postList:  action.payload
            }
        case ADD_TO_POST_LIST:
            return {
                ...state,
                postList: RecordController.add(
                    state.postList,
                    action.payload
                ),
            }
        default: return { ...state };
    }
}
