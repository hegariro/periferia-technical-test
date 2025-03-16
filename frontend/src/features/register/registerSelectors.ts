import { RootState } from '../../app/store';

export const selectRegister = (state: RootState) => state.register;
export const selectName = (state: RootState) => state.register.name;
export const selectEmail = (state: RootState) => state.register.email;
export const selectPassword = (state: RootState) => state.register.password;
export const selectConfirmPassword = (state: RootState) => state.register.confirmPassword;
