import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage por defecto

import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import registerReducer from '../features/register/registerSlice';
import loginReducer from '../features/login/loginSlice';

// Configuración de persistencia solo para auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userId', 'name', 'email', 'token']
};

const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['nickname', 'profileImage']
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        profile: persistedProfileReducer,
        register: registerReducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),    
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
