import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;
