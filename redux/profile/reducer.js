import {
    UPDATE_PROFILE_INFO,
    GET_PROFILE_INFO,
} from './const';
const INIT_STATE = {
    user: {
        profilePicture: "/images/profile.jfif",
        username: 'Hadis',
        bio: 'Software Developer',
      },
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PROFILE_INFO:
            return {
                ...state,
                profileList:  action.payload
            }
        case UPDATE_PROFILE_INFO:
            return {
                ...state,
                user: action.payload
            }

        default: return { ...state };
    }
}
