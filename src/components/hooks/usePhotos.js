import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPhotos = async (page, limit, albumId) => {
  const apiLink = albumId 
    ? `/albums/${albumId}/photos?_limit=${limit}&_page=${page}`
    : `/photos?_limit=${limit}&_page=${page}`
  
  const response = await axios.get(apiLink)
  return response.data
}

const usePhotos = (page = 1, limit = 18, albumId = null) => {
  return useQuery({
    queryKey: ["photos", page, limit, albumId],
    queryFn: () => fetchPhotos(page, limit, albumId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    keepPreviousData: true,
  })
}

export default usePhotos
