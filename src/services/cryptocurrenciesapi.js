import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

  
const cryptoApiheaders={
    'X-RapidAPI-Key': '79469ca38cmsh2578413263310a5p1fed40jsne056900ac71b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl="https://coinranking1.p.rapidapi.com"

const createRequest=(url)=>({
    url,
 headers:cryptoApiheaders
})

  export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery: fetchBaseQuery( {baseUrl} ),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptodetails:builder.query({
            query:(cryptoId)=>createRequest(`/coin/${cryptoId}`)
        }),
        getCryptochart:builder.query({
            query:({cryptoid,timeperiod})=>createRequest(`coin/${cryptoid}/history?timePeriod=${timeperiod}`)
        }),
    })
})


export const{
    useGetCryptosQuery,
    useGetCryptodetailsQuery,
    useGetCryptochartQuery,
    
} = cryptoApi;