import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name : 'root',
    initialState:{

      base:'small',
      crust:'Classic_thin',
      sause:'no_sause',
      cheese:'no_chease',
      pizza: 'cheesi',
      katchup: 'fruit'

    },

    reducers:{
        chooseBase : (state, action) => {state.base = action.payload},
        chooseCrust : (state, action) => {state.crust = action.payload},
        chooseSause : (state, action) => {state.sause = action.payload},
        chooseCheese: (state, action) => {state.cheese = action.payload},
        choosePizza: (state, action) => {state.pizza = action.payload},
        chooseKatchup: (state, action) => {state.katchup = action.payload},



    }
   
})

export const  reducers  = rootSlice.reducer;

export const {chooseBase, chooseCheese, chooseCrust, chooseSause, choosePizza, chooseKatchup} = rootSlice.actions