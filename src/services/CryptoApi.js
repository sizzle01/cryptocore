
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '87790fd376mshc608a7f1b581d79p16e408jsnc097355cb30d'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url, headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        })
    })
})
export const {
    useGetCryptosQuery,
} = cryptoApi 


// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '87790fd376mshc608a7f1b581d79p16e408jsnc097355cb30d'
//     }
//   };
  