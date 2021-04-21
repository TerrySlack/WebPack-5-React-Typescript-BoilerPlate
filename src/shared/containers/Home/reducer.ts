import { SET_HOME, SET_SELECTED_DETAILVIEW, SET_SORTED_FEATURES, HomeActionsTypes } from './actions';

interface VisitedAnchors {
  title: string;
  features: any[];
  selectedDetailViewId: string;
}
const initialState: VisitedAnchors = {
  features: [],
  title: '',
  selectedDetailViewId: '',
};

const HomeReducer = (state = initialState, action: HomeActionsTypes) => {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SORTED_FEATURES:
      // Update the features property in state.data with the sorted Features array
      return {
        ...state,
        features: [...state.features, ...action.payload],
      };
    case SET_SELECTED_DETAILVIEW:
      return {
        ...state,
        selectedDetailViewId: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
