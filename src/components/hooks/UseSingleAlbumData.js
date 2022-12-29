import { useQuery } from "react-query"
import axios from "axios"

const fetchAlbum = (albumId) => {
  return axios.get(`/albums/${albumId}`)
}

const useSingleAlbumData = ({ onSuccess, onError, albumId }) => {
  return useQuery(["single-album", albumId], () => fetchAlbum(albumId), {
    onSuccess,
    onError,
  })
}

export default useSingleAlbumData
