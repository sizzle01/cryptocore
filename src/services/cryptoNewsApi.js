import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders ={
    'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '87790fd376mshc608a7f1b581d79p16e408jsnc097355cb30d'
}
 const baseUrl ='https://bing-news-search1.p.rapidapi.com'

 const createRequest = (url) =>({url, headers:cryptoNewsHeaders})
 export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi 