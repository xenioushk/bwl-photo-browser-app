import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios"
import type { Photo } from "../../types"

/**
 * Fetches limited photos (used for preview/testing)
 * @returns Promise resolving to array of photos
 */
const fetchAllPhoto = async (): Promise<Photo[]> => {
  const response = await axios.get<Photo[]>(`/photos/?_limit=5`)
  return response.data
}

/**
 * Custom hook for fetching all photos (limited to 5)
 * @returns TanStack Query result with photos data
 */
const useAllPhotosData = (): UseQueryResult<Photo[], Error> => {
  return useQuery({
    queryKey: ["all-photos"],
    queryFn: fetchAllPhoto,
    enabled: false,
  })
}

export default useAllPhotosData
