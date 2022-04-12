import { createSlice } from "@reduxjs/toolkit"

export const stateSlice = createSlice({
  name: "states",
  initialState: {
    value: [],
  },
  reducers: {
    addState: (state, action) => {
      state.value.push(action.payload)
    },
    removeState: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    updateState: (state, action) => {
      state.value[action.payload.index] = action.payload.state
    },
    setStates: (state, action) => {
      state.value = action.payload
    },
  },
})
