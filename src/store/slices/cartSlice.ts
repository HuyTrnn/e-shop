import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartDetail",
  initialState: {
    method: "",
    data: [],
    user: "",
  },
  reducers: {
    addItems: (state: { data: any[]; }, action: { payload: { id: any; quantity: string; }; }) => {
      const existedItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (!existedItem) {
        state.data.push(action.payload);
      } else {
        state.data.forEach((item) => {
          if (item.id === action.payload.id) {
            return (item.quantity += parseInt(action.payload.quantity));
          }
        });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item: { id: any; }) => item.id !== itemId);
    },
    clearItems: (state) => {
      state.data = [];
    },
  },
});

export const { addItems, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
