import { useEffect } from "react"
import React from "react"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Photo Browser Application`
  }, [props.title])
  return <div>{props.children}</div>
}

export default Page
