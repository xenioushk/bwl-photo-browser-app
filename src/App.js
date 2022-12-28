import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"

import AllPhotos from "./components/pages/AllPhotos"
import SinglePhoto from "./components/pages/SinglePhoto"

//All Albums.
const LazyAlbums = React.lazy(() => import("./components/pages/Albums"))
// Single Album.
const LazySingleAlbum = React.lazy(() => import("./components/pages/SingleAlbum"))

//About Us Page
const LazyAboutUs = React.lazy(() => import("./components/pages/AboutUs"))
//Terms Page.
const LazyTerms = React.lazy(() => import("./components/pages/Terms"))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllPhotos />} />
        <Route path="/photo/:photoId" element={<SinglePhoto />} />
        <Route
          path="/all-albums"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAlbums />
            </React.Suspense>
          }
        />
        <Route
          path="/album/:albumId"
          element={
            <React.Suspense fallback="Loading...">
              <LazySingleAlbum />
            </React.Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <React.Suspense fallback="Loading...">
              <LazyTerms />
            </React.Suspense>
          }
        />
        {/* <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<SingleJob />} />
        
        <Route path="/search-job" element={<SearchBox />} />
        
        <Route path="/job/edit/:jobHash/:jobId" element={<EditJob />} />
        <Route path="/category/:catSlug" element={<Category />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
