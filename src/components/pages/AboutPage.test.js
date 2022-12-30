import { BrowserRouter as Router } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import AboutPage from "./AboutPage"

// test("about us sample test", () => {
//   render(<AboutPage />)
//   const linkElement = screen.getByText(/about/i)
//   expect(linkElement).toBeInTheDocument()
//   // screen.debug()
//   // screen.getByRole("")
// })

test("test for the about page title", () => {
  // ARRANGE
  render(<AboutPage />, { wrapper: Router })

  // const linkElement = screen.getByRole("heading")(/About Application/i)
  const linkElement = screen.getByRole("heading")
  // expect(linkElement).toBeInTheDocument()
  // ASSERT
  expect(linkElement).toHaveTextContent("About Application")
})
