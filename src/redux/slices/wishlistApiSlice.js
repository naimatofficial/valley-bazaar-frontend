import { WISHLIST_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const wishlistsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getWishLists: builder.query({
			query: (query) => {
				return {
					url: WISHLIST_URL,
					params: query,
				};
			},
		}),
		getWishListDetails: builder.query({
			query: (id) => ({
				url: `${WISHLIST_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createWishList: builder.mutation({
			query: () => ({
				url: `${WISHLIST_URL}`,
				method: "POST",
			}),
			invalidatesTags: ["WishList"],
		}),
		updateWishList: builder.mutation({
			query: (data) => ({
				url: `${WISHLIST_URL}/${data.wishlistId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["WishLists"],
		}),
		deleteWishList: builder.mutation({
			query: (wishlistId) => ({
				url: `${WISHLIST_URL}/${wishlistId}`,
				method: "DELETE",
			}),
			providesTags: ["WishList"],
		}),
	}),
});

export const {
	useGetWishListsQuery,
	useGetWishListDetailsQuery,
	useCreateWishListMutation,
	useUpdateWishListMutation,
	useDeleteWishListMutation,
} = wishlistsApiSlice;
