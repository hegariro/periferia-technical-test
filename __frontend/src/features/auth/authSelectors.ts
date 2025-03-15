import { RootState } from '../../app/store';

export const selectAuth = (state: RootState) => state.auth;
export const selectName = (state: RootState) => state.auth.name;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectPassword = (state: RootState) => state.auth.password;
export const selectConfirmPassword = (state: RootState) => state.auth.confirmPassword;
