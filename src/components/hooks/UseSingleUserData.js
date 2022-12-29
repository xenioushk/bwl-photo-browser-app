import { useQuery } from "react-query"
import axios from "axios"

const fetchUser = (userId) => {
  return axios.get(`/users/${userId}`)
}

const useSingleUserData = ({ onSuccess, onError, userId }) => {
  return useQuery(["single-user", userId], () => fetchUser(userId), {
    onSuccess,
    onError,
  })
}

export default useSingleUserData
