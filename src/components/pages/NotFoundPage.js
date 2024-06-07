import Page from "./Page"
import { Link } from "react-router-dom"
const NotFoundPage = () => {
  return (
    <Page title="404">
      <div className="container px-4 mx-auto items-center mt-4 md:px-0">
        <div className="grid grid-cols-1 gap-y-4 text-center">
          <h2 className="text-3xl">That page doesn't exist</h2>
          <p className="font-bold text-xl">Sorry, the page you are looking for could not be found!</p>
          <p>
            <Link to="/" title="Explore All Albums" className="transition bg-primaryBlue-600 text-white text-underline-none font-normal text-sm px-4 py-2 rounded hover:bg-black md:px-4 py-2 md:text-md md:font-bold">
              &laquo; Back to home page
            </Link>
          </p>
        </div>
      </div>
    </Page>
  )
}

export default NotFoundPage
