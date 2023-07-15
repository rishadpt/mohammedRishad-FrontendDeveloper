import { configureStore } from "@reduxjs/toolkit";

import rocketReducer from "../features/rockets/rocketSlice";
import capsuleReducer from "../features/capsules/capsuleSlice";

// export reducers used in the app
const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    capsules: capsuleReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Exporting the store by default
export default store;
