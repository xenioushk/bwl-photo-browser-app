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
const LazyAlbumsPage = React.lazy(() => import("./components/pages/AlbumsPage"))

// Single Album.
const LazySingleAlbumPage = React.lazy(() => import("./components/pages/SingleAlbumPage"))

//About Us Page
const LazyAboutPage = React.lazy(() => import("./components/pages/AboutPage"))

//Terms Page
const LazyTermsPage = React.lazy(() => import("./components/pages/TermsPage"))

// 404 Page.
const LazyNotFoundPage = React.lazy(() => import("./components/pages/NotFoundPage"))

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="">
                <LazyAllPhotosPage />
              </React.Suspense>
            }
          />
          <Route
            path="/photo/:photoId"
            element={
              <React.Suspense fallback="">
                <LazySinglePhotoPage />
              </React.Suspense>
            }
          />
          <Route
            path="/all-albums"
            element={
              <React.Suspense fallback="">
                <LazyAlbumsPage />
              </React.Suspense>
            }
          />
          <Route
            path="/album/:albumId"
            element={
              <React.Suspense fallback="">
                <LazySingleAlbumPage />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="">
                <LazyAboutPage />
              </React.Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <React.Suspense fallback="">
                <LazyTermsPage />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback="">
                <LazyNotFoundPage />
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
