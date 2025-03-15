import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState: AuthState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
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
        resetForm: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.confirmPassword = '';
        }
    }
});

export const { setName, setEmail, setPassword, setConfirmPassword, resetForm } = authSlice.actions;
export default authSlice.reducer;
