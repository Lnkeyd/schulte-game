import { createSlice } from "@reduxjs/toolkit";

const init = {
  tableDimension: [
    { name: "3 x 3", active: false },
    { name: "4 x 4", active: false },
    { name: "5 x 5", active: true },
    { name: "6 x 6", active: false },
    { name: "7 x 7", active: false },
    { name: "8 x 8", active: false },
    { name: "9 x 9", active: false },
    { name: "10 x 10", active: false },
  ],
  clickOnCeils: false,
  shuffleOnClick: true,
  dotInTheMiddle: false,
  tableStyle: [
    { name: "Classic", active: true },
    { name: "Modern", active: false },
    { name: "Elegance", active: false },
  ],
  tableMode: [
    { name: "Digits", active: true },
    { name: "Letters", active: false },
    { name: "Gorbov-Schulte", active: false },
  ],
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: init,
  reducers: {
    updateTableDimension: (state, { payload }) => {
      const index = state.tableDimension.findIndex(
        (item) => item.name === payload
      );
      state.tableDimension.forEach((item) => (item.active = false));
      state.tableDimension[index].active = true;
    },
    setTableStyle: (state, { payload }) => {
      const index = state.tableStyle.findIndex((item) => item.name === payload);
      state.tableStyle.forEach((item) => (item.active = false));
      state.tableStyle[index].active = true;
    },
    setTableMode: (state, { payload }) => {
      const index = state.tableMode.findIndex((item) => item.name === payload);
      state.tableMode.forEach((item) => (item.active = false));
      state.tableMode[index].active = true;
    },
    toggleClickOnCeils: (state) => {
      state.clickOnCeils = !state.clickOnCeils;
    },
    toggleShuffleOnClick: (state) => {
      state.shuffleOnClick = !state.shuffleOnClick;
    },
    toggleDotInTheMiddle: (state) => {
      state.dotInTheMiddle = !state.dotInTheMiddle;
    },
    initLocalStorageSettings: (state) => {
      const LS = localStorage.getItem("Settings");
      if (LS) {
        const parsed = JSON.parse(LS);

        state.clickOnCeils = parsed.clickOnCeils;
        state.dotInTheMiddle = parsed.dotInTheMiddle;
        state.shuffleOnClick = parsed.shuffleOnClick;
        state.tableDimension = parsed.tableDimension;
        state.tableMode = parsed.tableMode;
        state.tableStyle = parsed.tableStyle;
      } else {
        console.log("Unable to get saved settings.");
      }
    },
    updateLocalStorageSettings: (state) => {
      localStorage.setItem(
        "Settings",
        JSON.stringify({
          clickOnCeils: state.clickOnCeils,
          dotInTheMiddle: state.dotInTheMiddle,
          shuffleOnClick: state.shuffleOnClick,
          tableDimension: state.tableDimension,
          tableMode: state.tableMode,
          tableStyle: state.tableStyle,
        })
      );
    },
  },
});

export const {
  updateTableDimension,
  setTableMode,
  setTableStyle,
  toggleDotInTheMiddle,
  toggleShuffleOnClick,
  toggleClickOnCeils,
  initLocalStorageSettings,
  updateLocalStorageSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
