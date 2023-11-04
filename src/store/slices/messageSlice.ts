import { createSlice } from "@reduxjs/toolkit";

interface Message {
  messages: string [];
  isLoading: boolean;
}

const initialState: Message = {
  messages: [],
  isLoading: false,
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    },

    addMessages(state, action) {
      state.messages.push(action.payload);
    },
    
    setIsloading(state, action) {
      state.isLoading = action.payload;
    }
  }
})

export const { setMessages, addMessages, setIsloading } = messageSlice.actions;
export default messageSlice.reducer;
