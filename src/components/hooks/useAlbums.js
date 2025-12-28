import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchAlbums = async (page, limit) => {
  const response = await axios.get(`/albums?_limit=${limit}&_page=${page}`)
  return response.data
}

const useAlbums = (page = 1, limit = 18) => {
  return useQuery({
    queryKey: ["albums", page, limit],
    queryFn: () => fetchAlbums(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    keepPreviousData: true, // Keep previous data while fetching new page
  })
}

export default useAlbums
