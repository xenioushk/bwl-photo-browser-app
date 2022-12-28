// import React, { useState, useEffect } from "react"
// import axios from "axios"

// const UserCard = (props) => {
//   // const [userId, setUserId] = useState(props.userId)
//   const [userInfo, setUserInfo] = useState([])
//   // const [userInfo, setUserInfo] = useState([])

//   // setUserId(props.userId);

//   useEffect(() => {
//     var apiLink

//     apiLink = `http://jsonplaceholder.typicode.com/users/${props.userId}`

//     const fetchData = () => {
//       axios
//         .get(apiLink)
//         .then((res) => {
//           console.log(res.data)
//           console.log(res.data.length)
//           setUserInfo((prev) => prev.concat(res.data))
//         })
//         .catch((err) => console.log(err))
//     }

//     fetchData()
//   }, [])

//   return <div>Album By : {userInfo[0].name}</div>
// }

// export default UserCard
