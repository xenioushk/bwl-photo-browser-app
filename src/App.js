import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
// import Home from "./components/pages/Home"
import AboutUs from "./components/pages/AboutUs"
import Terms from "./components/pages/Terms"
// import SearchBox from "./components/search/SearchBox"

// import Category from "./components/pages/Category"
// import SingleJob from "./components/pages/SingleJob"
// import AddJob from "./components/form/AddJob"
// import EditJob from "./components/form/EditJob"

import Albums from "./components/pages/Albums"
import PhotoAlbum from "./components/pages/PhotoAlbum"

import AllPhotos from "./components/pages/AllPhotos"
import SinglePhoto from "./components/pages/SinglePhoto"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllPhotos />} />
        <Route path="/photo/:photoId" element={<SinglePhoto />} />
        <Route path="/all-albums" element={<Albums />} />
        <Route path="/album/:albumId" element={<PhotoAlbum />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
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
