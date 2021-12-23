import { SET_HOME, HomeActionsTypes } from "./actions";

interface VisitedAnchors {
  title: string;
}
const initialState: VisitedAnchors = {
  title: "Home",
};

const HomeReducer = (action: HomeActionsTypes, state = initialState) => {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
