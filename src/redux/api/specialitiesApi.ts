import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
        query: (data) => ({
            url: "/specialties",
            method: "POST",
            contentType: "multipart/form-data",
            data
      }),
    }),
    getAllSpecialty: build.query({
        query: () => ({
            url: "/specialties",
            method: "GET",
        }),
        providesTags:[tagTypes.specialties],
    }),
  }),
})

export const { useCreateSpecialtyMutation,useGetAllSpecialtyQuery } = specialitiesApi;