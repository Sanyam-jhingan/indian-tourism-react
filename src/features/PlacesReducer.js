import { createSlice } from "@reduxjs/toolkit"

export const placeSlice = createSlice({
  name: "places",
  initialState: {
    value: [],
  },
  reducers: {
    addPlace: (state, action) => {
      state.value.push(action.payload)
    },
    removePlace: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    updatePlace: (state, action) => {
      state.value[action.payload.index] = action.payload.place
    },
    setPlaces: (state, action) => {
      state.value = action.payload
    },
  },
})
