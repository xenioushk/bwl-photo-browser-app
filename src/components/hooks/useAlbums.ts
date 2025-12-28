import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import type { Album } from "../../types"

/**
 * Fetches albums from the API with pagination support
 * @param page - Page number (1-indexed)
 * @param limit - Number of items per page
 * @returns Promise resolving to array of albums
 */
const fetchAlbums = async (page: number, limit: number): Promise<Album[]> => {
  const response: AxiosResponse<Album[]> = await axios.get(`/albums?_page=${page}&_limit=${limit}`)
  return response.data
}

/**
 * Custom hook for fetching albums with TanStack Query
 * @param page - Current page number (default: 1)
 * @param limit - Items per page (default: 18)
 * @returns TanStack Query result with albums data
 */
const useAlbums = (page: number = 1, limit: number = 18): UseQueryResult<Album[], Error> => {
  return useQuery({
    queryKey: ["albums", page, limit],
    queryFn: () => fetchAlbums(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export default useAlbums
