import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    email: string;
    password: string;
}

const initialState: LoginState = {
    email: '',
    password: ''
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        resetForm: (state) => {
            state.email = '';
            state.password = '';
        }
    }
});

export const { setEmail, setPassword, resetForm } = loginSlice.actions;
export default loginSlice.reducer;
