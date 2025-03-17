import { RootState } from '../../app/store';

export const selectProfile = (state: RootState) => state.profile;
export const selectNickname = (state: RootState) => state.profile.nickname;
export const selectProfileImage = (state: RootState) => state.profile.profileImage;
