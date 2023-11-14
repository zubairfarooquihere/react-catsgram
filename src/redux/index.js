import { configureStore } from "@reduxjs/toolkit";

import layoutSlice from "./Layout-slice";
 
const store = configureStore({
  reducer: { layout: layoutSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});
 
export default store;