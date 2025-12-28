import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchAlbum = (albumId) => {
  return axios.get(`/albums/${albumId}`)
}

const useSingleAlbumData = ({ onSuccess, onError, albumId }) => {
  return useQuery({
    queryKey: ["single-album", albumId],
    queryFn: () => fetchAlbum(albumId),
    onSuccess,
    onError,
  })
}

export default useSingleAlbumData
