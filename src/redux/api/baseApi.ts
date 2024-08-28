import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
    endpoints: () => ({

    }),
    })