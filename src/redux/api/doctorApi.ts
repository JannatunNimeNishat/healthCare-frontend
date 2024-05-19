
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types";

const doctorApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        createDoctor: build.mutation({
            query:(data)=>({
                url:'/user/create-doctor',
                method:'POST',
                contentType: "multipart/form-data",
                data:data
            }),
            invalidatesTags:[tagTypes.doctor]
        }),
        getDoctor: build.query({
            query:()=>({
                url:'/doctor',
                method:"GET"
            }),
            transformResponse:(response:any,meta:IMeta)=>{
                return {
                    doctors:response,
                    meta
                }
            },
            providesTags:[tagTypes.doctor]
        })
    })
})

export const { useCreateDoctorMutation } = doctorApi;