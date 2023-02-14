import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../action/slices';

export default configureStore({
    reducer: {
        forms: formSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});