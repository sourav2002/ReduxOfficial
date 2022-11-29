import usersSlice from "../features/users/usersSlice";
import postsSlice from "../features/posts/postsSlice";

import { combineReducers } from "@reduxjs/toolkit";
export default combineReducers({
    usersSlice,
    postsSlice
})