import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: { value: null },
  reducers: {
    setPhoto: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPhoto } = photoSlice.actions;
export default photoSlice.reducer;
