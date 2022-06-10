import {State} from '../../types/state';
import {NameSpace} from '../../const';

const commentsState = (state: State) => state[NameSpace.Comments];

export const selectComments = (state: State) => commentsState(state).commentsData;
export const selectCommentsStatus = (state: State) => commentsState(state).commentsFetchStatus;

export const newCommentSendStatus = (state: State) => commentsState(state).newCommentSendStatus;
