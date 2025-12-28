import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import type { UserResponse } from "../../types"

/**
 * Fetches a single user by ID
 * @param userId - The ID of the user to fetch
 * @returns Promise resolving to user response
 */
const fetchUser = async (userId: number): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.get(`/users/${userId}`)
  return response.data
}

interface UseSingleUserDataParams {
  userId: number
}

/**
 * Custom hook for fetching a single user
 * @param params - Object containing userId and optional callbacks
 * @returns TanStack Query result with user data
 */
const useSingleUserData = ({ userId }: UseSingleUserDataParams): UseQueryResult<UserResponse, Error> => {
  return useQuery({
    queryKey: ["single-user", userId],
    queryFn: () => fetchUser(userId),
  })
}

export default useSingleUserData
