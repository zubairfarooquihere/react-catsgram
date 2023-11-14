import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState: {
    breakpoints: {
      lg: 1200,
      md: 996,
      sm: 768,
      xs: 480,
      xxs: 0,
    },
    cols: {
      //cols to place pokemon
      lg: 3,
      md: 3,
      sm: 3,
      xs: 3,
      xxs: 3,
    },
    rows: {
      //Height of grid
      lg: 10,
      md: 9,
      sm: 9,
      xs: 8,
      xxs: 4,
    },
    layout: {
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: [],
    },
    Touched: {
      lg: false,
      md: false,
      sm: false,
      xs: false,
      xxs: false,
    },
  },
  reducers: {
    addLayout(state, action) {
      //let bPointsArr = ["lg", "md", "sm", "xs", "xxs"];
      let hdynamic = 17;
      ["lg", "md", "sm", "xs", "xxs"].map((bp, index) => {
        if (bp === "xxs") {
          hdynamic = 23;
        }
        action.payload.postArr.map((ele, index) => {
          state.layout[bp].push({
            i: ele.id,
            x: ele.x,
            y: ele.y,
            w: 1,
            h: hdynamic,
            minW: 1,
            minH: 1,
            maxH: Infinity,
            maxW: Infinity,
          });
          return null;
        });
        return null;
      });
    },
  },
});

export const layoutActions = layoutSlice.actions;

export default layoutSlice;
