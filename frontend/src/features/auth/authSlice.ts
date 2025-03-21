import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    userId: number;
    name: string;
    email: string;
    token: string;
}

const initialState: AuthState = {
    userId: 0,
    name: '',
    email: '',
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number>) => {
            state.userId = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        resetForm: (state) => {
            state.userId = 0;
            state.name = '';
            state.email = '';
            state.token = '';
        }
    }
});

export const { setUserId, setName, setEmail, setToken, resetForm } = authSlice.actions;
export default authSlice.reducer;
