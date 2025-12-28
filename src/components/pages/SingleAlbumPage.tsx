import React from "react"
import { useParams } from "react-router-dom"
import Photos from "../photos/Photos"
import Page from "./Page"

const SingleAlbumPage: React.FC = () => {
  const params = useParams<{ albumId: string }>()

  return (
    <Page title={`Photo Album#${params.albumId}`}>
      <Photos albumId={params.albumId} albumTitle={`Album#${params.albumId}`} />
    </Page>
  )
}

export default SingleAlbumPage
