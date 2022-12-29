import { useEffect } from "react"
import AllAlbums from "../albums/AllAlbums"
import Page from "./Page"

const AlbumsPage = () => {
  useEffect(() => {
    document.title = "All Albums"
  }, [])
  return (
    <Page title="All Albums">
      <AllAlbums />
    </Page>
  )
}

export default AlbumsPage
