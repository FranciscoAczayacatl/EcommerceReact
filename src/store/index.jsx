import { configureStore } from '@reduxjs/toolkit'
import setCart  from './slices/cart.slice'
import isLoading from './slices/isLoading.slice'
import productsSlice  from './slices/products.slice'
import PurchasesSlice  from './slices/Purchases.slice'

export default configureStore({
    reducer: {
      products:productsSlice,
      isLoading:isLoading,
      purchases:PurchasesSlice,
      cart: setCart
    }
})

