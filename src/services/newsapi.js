import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '79469ca38cmsh2578413263310a5p1fed40jsne056900ac71b',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };

const newsheaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "79469ca38cmsh2578413263310a5p1fed40jsne056900ac71b",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl="https://bing-news-search1.p.rapidapi.com";
// `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
const queryCreater=(url)=>({url,headers:newsheaders})

export const  newsApi=createApi({
    reducerPath:"newsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({count,newsCategory})=>queryCreater(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })       
    })
})
export const {useGetNewsQuery}=newsApi;