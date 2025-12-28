import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import type { PhotoResponse } from "../../types"

/**
 * Fetches a single photo by ID
 * @param photoId - The ID of the photo to fetch
 * @returns Promise resolving to photo response
 */
const fetchSinglePhoto = async (photoId: number): Promise<PhotoResponse> => {
  const response: AxiosResponse<PhotoResponse> = await axios.get(`/photos/${photoId}`)
  return response.data
}

interface UseSinglePhotoDataParams {
  photoId: number
}

/**
 * Custom hook for fetching a single photo
 * @param params - Object containing photoId
 * @returns TanStack Query result with photo data
 */
const useSinglePhotoData = ({ photoId }: UseSinglePhotoDataParams): UseQueryResult<PhotoResponse, Error> => {
  return useQuery<PhotoResponse, Error>({
    queryKey: ["single-photo", photoId],
    queryFn: () => fetchSinglePhoto(photoId),
  })
}

export default useSinglePhotoData
