import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1/",
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    registerAccount: builder.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["authApi"],
    }),
    loginAccount: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["authApi"],
    }),
    logoutAccount: builder.mutation({
      query: (token) => ({
        url: "user-logout",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["authApi"],
    }),

    changePassword: builder.mutation({
      query: ({ token, password }) => ({
        url: "change-password",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: password,
      }),
      invalidatesTags: ["authApi"],
    }),
  }),
});

export const {
  useRegisterAccountMutation,
  useLoginAccountMutation,
  useLogoutAccountMutation,
  useChangePasswordMutation,
} = authApi;
