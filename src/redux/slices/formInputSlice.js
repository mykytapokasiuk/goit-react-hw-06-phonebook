import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', number: '' };

const formInputSlice = createSlice({
  name: 'formInput',
  initialState,
  reducers: {
    setNameInput: (state, action) => {
      state.name = action.payload;
    },
    setNumberInput: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const formInputSliceReducer = formInputSlice.reducer;
export const { setNameInput, setNumberInput } = formInputSlice.actions;
