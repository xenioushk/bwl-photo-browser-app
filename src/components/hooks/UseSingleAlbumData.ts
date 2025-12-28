import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import type { AlbumResponse } from "../../types"

/**
 * Fetches a single album by ID
 * @param albumId - The ID of the album to fetch
 * @returns Promise resolving to album response
 */
const fetchAlbum = async (albumId: number): Promise<AlbumResponse> => {
  const response: AxiosResponse<AlbumResponse> = await axios.get(`/albums/${albumId}`)
  return response.data
}

interface UseSingleAlbumDataParams {
  albumId: number
}

/**
 * Custom hook for fetching a single album
 * @param params - Object containing albumId and optional callbacks
 * @returns TanStack Query result with album data
 */
const useSingleAlbumData = ({ albumId }: UseSingleAlbumDataParams): UseQueryResult<AlbumResponse, Error> => {
  return useQuery({
    queryKey: ["single-album", albumId],
    queryFn: () => fetchAlbum(albumId),
  })
}

export default useSingleAlbumData
