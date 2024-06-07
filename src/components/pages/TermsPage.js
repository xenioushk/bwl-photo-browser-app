import Page from "./Page"
import Breadcrumb from "../base/Breadcrumb"

const Terms = () => {
  return (
    <Page title="Terms & Conditions">
      <div className="container px-4 mx-auto items-center mt-4 md:px-0">
        <Breadcrumb title="Terms & Conditions" />
        <div className="grid grid-cols-1 gap-y-4">
          <h2 className="text-3xl">Terms & Conditions</h2>
          <p className="font-bold text-xl">Some guidelines:</p>

          <ol className="flex gap-4 flex-col">
            <li>Your solution should be able to scale for a larger purpose. Thus imagine the app being extended to cover a larger API, a bigger feature set and more views.</li>
            <li>Showcase your abilities, and use the task to demonstrate your idea of best practices, regarding coding style, project structure, frameworks, patterns, design, testing etc.</li>
            <li>There is no right or wrong solution, as long as it is your solution.Be prepared to describe your work in detail.</li>
          </ol>
        </div>
      </div>
    </Page>
  )
}

export default Terms
