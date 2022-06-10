import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, FetchStatus, SendStatus} from '../../const';
import {handleError} from '../../services/error-handle';
import {Comments, Comment, NewComment} from '../../types/comments';
import {AppDispatch, State} from '../../types/state';

interface InitialState {
  commentsData: Comments,
  commentsFetchStatus: FetchStatus,
  newCommentSendStatus: SendStatus,
}

const initialState: InitialState = {
  commentsData: [],
  commentsFetchStatus: FetchStatus.Idle,
  newCommentSendStatus: SendStatus.Idle,
};

export const fetchComments = createAsyncThunk<Comment[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const postNewComment = createAsyncThunk<Comments, NewComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendNewComment',
  async ({offerId, rating, comment}, {extra: api}) => {
    try {
      const {data} = await api.post<Comments>(`${APIRoute.Comments}/${offerId}`, {rating, comment});
      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

const commentsProcess = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsFetchStatus = FetchStatus.Succeeded;
        state.commentsData = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsFetchStatus = FetchStatus.Failed;
      })
      .addCase(postNewComment.pending, (state) => {
        state.newCommentSendStatus = SendStatus.Loading;
      })
      .addCase(postNewComment.fulfilled, (state, action) => {
        state.newCommentSendStatus = SendStatus.Succeeded;
        state.commentsData = action.payload;
      })
      .addCase(postNewComment.rejected, (state) => {
        state.newCommentSendStatus = SendStatus.Failed;
      });
  },
});

const {reducer} = commentsProcess;

export default reducer;
