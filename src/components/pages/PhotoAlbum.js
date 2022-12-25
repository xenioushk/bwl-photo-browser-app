import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Photos from "../photos/Photos"
import Page from "./Page"

const PhotoAlbum = () => {
  const params = useParams()
  useEffect(() => {
    document.title = `Photo Album#${params.albumId}`
  }, [])
  return (
    <Page title={`Photo Album#${params.albumId}`}>
      <Photos albumId={params.albumId} />
    </Page>
  )
}

export default PhotoAlbum
