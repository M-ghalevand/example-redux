import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters:{
  All: string,
  Active: string,
  Completed: string,
} = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
const initState:{status:string,colors:string[]} = {
  status: StatusFilters.All,
  colors:[],
};


const filterSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    changeStatusFilter(state, action) {
      state.status = action.payload;
    },
    changedColorFilter: {
      reducer(state, action) {
        const { colors } = state;
        const { color, changType } = action.payload;
        switch (changType) {
          case "added":
            state.colors.push(color);
            break;
          case "removed":
            state.colors = colors.filter((c) => c !== color);
            break;
        }
      },
      // @ts-ignore
      prepare (filter: { color: string, changType: string }) {
        return {
          payload: {
            color: filter.color,
            changType: filter.changType,
          },
        };
      },
    },
  },
});

export const selectStatusFilter = (state) => state.filter.status;
export const selectColorsFilter = (state) => state.filter.colors;
export const availableColors = ["green", "blue", "orange", "purple", "red"];

export const { changeStatusFilter, changedColorFilter } = filterSlice.actions;
export default filterSlice.reducer;
