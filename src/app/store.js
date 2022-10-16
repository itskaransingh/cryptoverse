import {configureStore} from '@reduxjs/toolkit';
import {cryptoApi} from '../services/cryptocurrenciesapi'
import {newsApi} from '../services/newsapi';

export default configureStore({
    reducer:{
      [cryptoApi.reducerPath]:cryptoApi.reducer,
      [newsApi.reducerPath]:newsApi.reducer,
    }
})