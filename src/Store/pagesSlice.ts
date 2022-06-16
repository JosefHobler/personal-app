import { createSlice } from "@reduxjs/toolkit";

interface Initial {
  curPage: number;
  prevPage: number;
}

const initialState: Initial = {
  curPage: 0,
  prevPage: 1,
};

const pagesSlice = createSlice({
  name: "curPage",
  initialState,
  reducers: {
    changeCurPage(state, action): Initial {
      return {
        ...state,
        curPage: action.payload,
      };
    },
    changePrevPage(state, action): Initial {
      return {
        ...state,
        prevPage: action.payload,
      };
    },
  },
});

export default pagesSlice;

export const pageSliceAction = pagesSlice.actions;
