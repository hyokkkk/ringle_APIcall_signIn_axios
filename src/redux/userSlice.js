import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  jwtToken : "",
}

// reducer
export const userSlice = createSlice({
  name : "user",
  initialState,
  reducers: {
    jwtTokenUpdate: (state, action) => {
      state.jwtToken = action.payload;
    }
  },
});

console.log(userSlice);

// action creators
export const { jwtTokenUpdate } = userSlice.actions;
export default userSlice.reducer