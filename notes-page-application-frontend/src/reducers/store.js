import { configureStore} from '@reduxjs/toolkit';
import noteTracker from './users/reducer';

export const store = configureStore({
    reducer: {
        users: noteTracker
    },
    devTools: true
});