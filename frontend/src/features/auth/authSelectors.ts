import { RootState } from '../../app/store';

export const selectAuth = (state: RootState) => state.auth;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectName = (state: RootState) => state.auth.name;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;
