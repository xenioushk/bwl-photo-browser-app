import React from "react"
import AllAlbums from "../albums/AllAlbums"
import Page from "./Page"

const AlbumsPage: React.FC = () => {
  return (
    <Page title="All Albums">
      <AllAlbums />
    </Page>
  )
}

export default AlbumsPage
