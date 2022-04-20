import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // for login purpouse
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    // for user apdate and delete
    //  deleteUserStart : (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    //  },
    //  deleteUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    // },
    // deleteUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const { loginStart, loginSuccess, loginFailure ,logout } = userSlice.actions;
export default userSlice.reducer;