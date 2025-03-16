import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    userId: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    token: string;
}

const initialState: AuthState = {
    userId: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action: PayloadAction<string>) => {
            state.confirmPassword = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        resetForm: (state) => {
            state.userId = 0;
            state.name = '';
            state.email = '';
            state.password = '';
            state.confirmPassword = '';
            state.token = '';
        }
    }
});

export const { setUserId, setName, setEmail, setPassword, setConfirmPassword, setToken, resetForm } = authSlice.actions;
export default authSlice.reducer;
