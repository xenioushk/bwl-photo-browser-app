import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"

// Home Page.
const LazyAllPhotos = React.lazy(() => import("./components/pages/AllPhotos"))

// SinglePhoto
const LazySinglePhoto = React.lazy(() => import("./components/pages/SinglePhoto"))

//All Albums.
const LazyAlbums = React.lazy(() => import("./components/pages/Albums"))

// Single Album.
const LazySingleAlbum = React.lazy(() => import("./components/pages/SingleAlbum"))

//About Us Page
const LazyAboutUs = React.lazy(() => import("./components/pages/AboutUs"))

//Terms Page
const LazyTerms = React.lazy(() => import("./components/pages/Terms"))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAllPhotos />
            </React.Suspense>
          }
        />
        <Route
          path="/photo/:photoId"
          element={
            <React.Suspense fallback="Loading...">
              <LazySinglePhoto />
            </React.Suspense>
          }
        />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
