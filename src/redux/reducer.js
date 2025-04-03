import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, action) => action.payload,
    addItem: (state, action) => [...state, action.payload],
    removeItem: (state, action) => state.filter(item => item.id !== action.payload),
  },
});

export const { setItems, addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
