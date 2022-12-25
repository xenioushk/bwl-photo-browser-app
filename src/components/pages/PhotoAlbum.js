import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Photos from "../photos/Photos"
import Page from "./Page"

const PhotoAlbum = () => {
  const params = useParams()
  useEffect(() => {
    document.title = "Photos"
  }, [])
  return (
    <Page title="Photos">
      <Photos albumId={params.photoId} />
    </Page>
  )
}

export default PhotoAlbum
