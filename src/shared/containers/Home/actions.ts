const SET_HOME = 'SET_HOME';
const SET_SORTED_FEATURES = 'SET_SORTED_FEATURES';
const SET_SELECTED_DETAILVIEW = 'SET_SELECTED_DETAILVIEW';

interface ActionTypes {
  SET_HOME: string;
  SET_SORTED_FEATURES: string;
  SET_SELECTED_DETAILVIEW: string;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: any;
}

export type HomeActionsTypes = MessageAction;

const setFeatures = (data: object): HomeActionsTypes => ({
  type: SET_HOME,
  payload: data,
});
const setSortedFeatures = (data: []): HomeActionsTypes => ({
  type: SET_SORTED_FEATURES,
  payload: data,
});

const setSelectedDetailViewId = (data: string): HomeActionsTypes => ({
  type: SET_SELECTED_DETAILVIEW,
  payload: data,
});

export {
  SET_HOME,
  SET_SORTED_FEATURES,
  SET_SELECTED_DETAILVIEW,
  setSortedFeatures,
  setFeatures,
  setSelectedDetailViewId,
};
