import { useEffect } from "react"
import Photos from "../photos/Photos"
import Page from "./Page"

const AllPhotos = () => {
  useEffect(() => {
    document.title = "All Photos"
  }, [])
  return (
    <Page title="Photos">
      <Photos />
    </Page>
  )
}

export default AllPhotos
