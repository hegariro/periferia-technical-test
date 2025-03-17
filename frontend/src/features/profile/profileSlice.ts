import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    nickname: string;
    profileImage: string;
}

const initialState: ProfileState = {
    nickname: '',
    profileImage: ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setNickname: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
        setProfileImage: (state, action: PayloadAction<string>) => {
            state.profileImage = action.payload;
        },
        resetForm: (state) => {
            state.nickname = '';
            state.profileImage = '';
        }
    }
});

export const { setNickname, setProfileImage, resetForm} = profileSlice.actions;
export default profileSlice.reducer;
