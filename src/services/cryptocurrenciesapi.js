import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '79469ca38cmsh2578413263310a5p1fed40jsne056900ac71b',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  
const cryptoApiheaders={
    'X-RapidAPI-Key': '79469ca38cmsh2578413263310a5p1fed40jsne056900ac71b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const param=(n)=>(
 {limit:`${n}`,}
)


const baseUrl="https://coinranking1.p.rapidapi.com"

const createRequest=(url,count)=>({
    url,
 headers:cryptoApiheaders,
 params:param(count),
})

  export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery: fetchBaseQuery( {baseUrl} ),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins`,count)
        })
    })
})


export const{
    useGetCryptosQuery,
} = cryptoApi;