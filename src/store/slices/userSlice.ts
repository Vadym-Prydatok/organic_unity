import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: UserState = {
  name: null,
  email: null, 
  token: null, 
  id: null, 
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    clearUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

