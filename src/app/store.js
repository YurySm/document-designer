import { configureStore } from '@reduxjs/toolkit';
import offerSlice from '../features/offer/offerSlice';
import offerPaySlice from '../features/offerPay/offerPaySlice';


const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
};

export const store = configureStore({
  reducer: {
    offer: offerSlice,
    offerPay: offerPaySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
