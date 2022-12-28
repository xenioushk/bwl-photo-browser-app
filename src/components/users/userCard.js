import React, { useState, useEffect } from "react"
import axios from "axios"

const UserCard = (props) => {
  // const [userId, setUserId] = useState(props.userId)
  const [userInfo, setUserInfo] = useState([])
  // const [userInfo, setUserInfo] = useState([])

  // setUserId(props.userId);

  useEffect(() => {
    var apiLink

    apiLink = `http://jsonplaceholder.typicode.com/users/${props.userId}`

    const fetchData = () => {
      axios
        .get(apiLink)
        .then((res) => {
          console.log(res.data)
          console.log(res.data.length)
          // setLoadMoreBtnText("Load More")
          // setLoadMoreBtnDisabled(false)
          // setMaxPages(res.data.max_pages)
          // setIsLoaded(true)
          // setStatus(res.data.length > 0 ? true : false)

          // maximum number of page value is greater than 1 then we are going to show the button.

          // res.data.max_pages > 1 ? setLoadMoreBtn(1) : setLoadMoreBtn(0)
          // setLoadMoreBtn(1)
          // setJobs(jobs.push(res.data.job_data))
          setUserInfo((prev) => prev.concat(res.data))
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [])

  return <div>Album By : {userInfo[0].name}</div>
}

export default UserCard
