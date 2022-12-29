import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"

const queryClient = new QueryClient()

// Home Page.
const LazyAllPhotosPage = React.lazy(() => import("./components/pages/AllPhotosPage"))

// SinglePhoto
const LazySinglePhotoPage = React.lazy(() => import("./components/pages/SinglePhotoPage"))

//All Albums.
const LazyAlbums = React.lazy(() => import("./components/pages/Albums"))

// Single Album.
const LazySingleAlbum = React.lazy(() => import("./components/pages/SingleAlbum"))

//About Us Page
const LazyAboutPage = React.lazy(() => import("./components/pages/AboutPage"))

//Terms Page
const LazyTermsPage = React.lazy(() => import("./components/pages/TermsPage"))

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAllPhotosPage />
              </React.Suspense>
            }
          />
          <Route
            path="/photo/:photoId"
            element={
              <React.Suspense fallback="Loading...">
                <LazySinglePhotoPage />
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
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAboutPage />
              </React.Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <React.Suspense fallback="Loading...">
                <LazyTermsPage />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
