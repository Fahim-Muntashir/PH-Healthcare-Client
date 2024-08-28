import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
    endpoints: () => ({

    }),
    })