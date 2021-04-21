const SET_ANCHOR_VISITED_STATUS = 'SET_ANCHOR_VISITED_STATUS';

interface ActionTypes {
  SET_ANCHOR_VISITED_STATUS: string;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: string;
}

export type VisitedAnchorsActionsTypes = MessageAction;

const setAnchorVisistedStatus = (data: string): VisitedAnchorsActionsTypes => ({
  type: SET_ANCHOR_VISITED_STATUS,
  payload: data,
});
export { SET_ANCHOR_VISITED_STATUS, setAnchorVisistedStatus };
