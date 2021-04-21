import { SET_PROFILE, ProfileActionsTypes } from './actions';

interface ProfileView {
  profile: object;
}

const initialState: ProfileView = { profile: {} };

const ProfileViewReducer = (state = initialState, action: ProfileActionsTypes) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ProfileViewReducer;
