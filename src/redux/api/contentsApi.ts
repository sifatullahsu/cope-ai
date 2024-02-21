import { tags } from '../tags'
import { baseApi } from './baseApi'

export const contentsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createContent: build.mutation({
      query: ({ data }) => ({
        url: `/contents`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.contents]
    }),
    getContents: build.query({
      query: ({ query }) => ({
        url: `/contents?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.contents]
    }),
    getContent: build.query({
      query: ({ id, query }) => ({
        url: `/contents/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.contents]
    })
  })
})

export const { useCreateContentMutation, useGetContentsQuery, useGetContentQuery } = contentsApi
