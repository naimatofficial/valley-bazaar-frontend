import { BRAND_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const brandsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBrands: builder.query({
			query: ({ brand }) => ({
				url: BRAND_URL,
				params: { brand },
			}),
		}),
		getBrandDetails: builder.query({
			query: (id) => ({
				url: `${BRAND_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createBrand: builder.mutation({
			query: () => ({
				url: `${BRAND_URL}`,
				method: "POST",
			}),
			invalidatesTags: ["brand"],
		}),
		updateBrand: builder.mutation({
			query: (data) => ({
				url: `${BRAND_URL}/${data.brandId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Brand"],
		}),
		deleteBrand: builder.mutation({
			query: (brandId) => ({
				url: `${BRAND_URL}/${brandId}`,
				method: "DELETE",
			}),
			providesTags: ["Brand"],
		}),
	}),
});

export const {
	useGetBrandsQuery,
	useGetBrandDetailsQuery,
	useCreateBrandMutation,
	useUpdateBrandMutation,
	useDeleteBrandMutation,
} = brandsApiSlice;
