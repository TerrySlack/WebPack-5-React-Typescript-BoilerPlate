const SET_PROFILE = 'SET_PROFILE';

interface ActionTypes {
  SET_PROFILE: string;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: object;
}

export type ProfileActionsTypes = MessageAction;
const setProfile = (data: object): ProfileActionsTypes => ({
  type: SET_PROFILE,
  payload: data,
});
export { SET_PROFILE, setProfile };
