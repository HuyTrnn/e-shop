import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productSlice";
import collectionsReducer from "./slices/collectionSlice";
import productDetailReducer from "./slices/productDetail";
import billReducer from "./slices/billSlice"
import ordersReducer from "./slices/orderSlice"
import addToCartReducer from "./slices/cartSlice"
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
  blacklist: ["post", "signUp", "addToCart", "bill"],
};

const rootReducer = combineReducers({
  login: loginReducer,
  imgSlider: sliderReducer,
  products: productsReducer,
  collections: collectionsReducer,
  productDetail: productDetailReducer,
  addToCart: addToCartReducer,
  bill : billReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { store };
