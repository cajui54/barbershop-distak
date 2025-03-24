import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';

export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
