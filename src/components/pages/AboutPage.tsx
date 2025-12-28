import React from "react"
import Page from "./Page"
import Breadcrumb from "../base/Breadcrumb"

const AboutPage: React.FC = () => {
  return (
    <Page title="About Us">
      <div className="container px-4 mx-auto items-center mt-4 md:px-0">
        <Breadcrumb title="About Application" />
        <div className="grid grid-cols-1 gap-y-4">
          <h2 className="text-3xl">About Application</h2>
          <p>Photo Browser is a simple web app representing features that are fairly common in many real life web apps out there (i.e. fetching JSON formatted data from a REST API, presenting the data on a list and perhaps demonstrating some basic navigation in form of opening a details page describing single item in detail).</p>
        </div>
      </div>
    </Page>
  )
}

export default AboutPage
