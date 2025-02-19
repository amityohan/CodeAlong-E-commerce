import {configStore} from '@reduxjs/toolkit';
import UserReducer from './UsersSlice.js';

const store= configureStore({
    reduces:{
        user:UserReducer,
    },
});

export default store;
