import { IMeta } from "@/types"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

export const scheduleApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        createSchedule: build.mutation({
            query:(data)=>({
                url:'/schedule',
                method:"POST",
                data
            }),
            invalidatesTags:[tagTypes.specialties]
        }),
        getAllSchedules: build.query({
            query:(arg:Record<string,any>) =>{
                return{
                    url:'/schedule',
                    method:"GET",
                    params:arg
                }
            },
            transformResponse:(response:[],meta:IMeta)=>{
                return{
                    schedules:response,
                    meta
                }
            },
            providesTags:[tagTypes.schedule]
        })
    })
})