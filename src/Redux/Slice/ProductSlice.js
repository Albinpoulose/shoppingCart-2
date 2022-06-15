import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    info: "",
  },
  reducers: {
    setProductId: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setProductId } = productSlice.actions;
export default productSlice.reducer;
