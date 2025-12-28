import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUser = (userId) => {
  return axios.get(`/users/${userId}`)
}

const useSingleUserData = ({ onSuccess, onError, userId }) => {
  return useQuery({
    queryKey: ["single-user", userId],
    queryFn: () => fetchUser(userId),
    onSuccess,
    onError,
  })
}

export default useSingleUserData
