import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import type { Photo } from "../../types"

/**
 * Fetches photos from the API with pagination support
 * @param page - Page number (1-indexed)
 * @param limit - Number of items per page
 * @param albumId - Optional album ID to filter photos
 * @returns Promise resolving to array of photos
 */
const fetchPhotos = async (page: number, limit: number, albumId: number | null): Promise<Photo[]> => {
  const apiLink = albumId ? `/albums/${albumId}/photos?_limit=${limit}&_page=${page}` : `/photos?_limit=${limit}&_page=${page}`

  const response: AxiosResponse<Photo[]> = await axios.get(apiLink)
  return response.data
}

/**
 * Custom hook for fetching photos with TanStack Query
 * @param page - Current page number (default: 1)
 * @param limit - Items per page (default: 18)
 * @param albumId - Optional album filter (default: null)
 * @returns TanStack Query result with photos data
 */
const usePhotos = (page: number = 1, limit: number = 18, albumId: number | null = null): UseQueryResult<Photo[], Error> => {
  return useQuery({
    queryKey: ["photos", page, limit, albumId],
    queryFn: () => fetchPhotos(page, limit, albumId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export default usePhotos
