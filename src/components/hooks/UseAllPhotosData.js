import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchAllPhoto = () => {
  return axios.get(`/photos/?_limit=5`)
}

const useAllPhotosData = (params) => {
  const { onSuccess, onError } = params
  return useQuery({
    queryKey: ["single-photo"],
    queryFn: fetchAllPhoto,
    enabled: false,
    onSuccess,
    onError,
  })
}

export default useAllPhotosData
