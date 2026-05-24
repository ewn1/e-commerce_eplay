import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer, // Adiciona o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Adiciona o middleware do RTK Query
})

export type RootReducer = ReturnType<typeof store.getState> // Tipo customizado para o estado global da aplicação
