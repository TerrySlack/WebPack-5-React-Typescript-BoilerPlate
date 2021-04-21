import { SET_ANCHOR_VISITED_STATUS, VisitedAnchorsActionsTypes } from './actions';

interface VisitedAnchors {
  visitedAnchors: {};
}
const initialState: VisitedAnchors = { visitedAnchors: {} };

const EarthQuakeReducer = (state = initialState, action: VisitedAnchorsActionsTypes) => {
  switch (action.type) {
    case SET_ANCHOR_VISITED_STATUS:
      const visitedAnchors = { ...state.visitedAnchors };
      visitedAnchors[action.payload] = 'visited';
      return {
        ...state,
        visitedAnchors,
      };
    default:
      return state;
  }
};

export default EarthQuakeReducer;
