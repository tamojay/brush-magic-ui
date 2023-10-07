import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

const backgroundColors = [
  "white",
  "lightblue",
  "lightgreen",
  "lightpink",
  "#fcf6bd",
  "#14213d",
]; // Add your desired background colors here

const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
  canvasBackgroundColor: backgroundColors[0], // Initialize with the default color (white)
  backgroundColorIndex: 0, // Initialize the index to 0
  drawHistory: [], // Store draw history
  historyPointer: 0, // Track draw history pointer
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionMenuItem = action.payload;
    },
    changeBackgroundColor: (state) => {
      state.backgroundColorIndex =
        (state.backgroundColorIndex + 1) % backgroundColors.length; // Rotate to the next color
      state.canvasBackgroundColor =
        backgroundColors[state.backgroundColorIndex];
    },
    clearCanvas: (state) => {
      state.drawHistory = []; // Clear the draw history
      state.historyPointer = 0; // Reset the draw history pointer
    },
  },
});

export const {
  menuItemClick,
  actionItemClick,
  changeBackgroundColor,
  clearCanvas,
} = menuSlice.actions;

export default menuSlice.reducer;
