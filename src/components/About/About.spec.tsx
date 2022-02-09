import {screen, render} from "@testing-library/react"
import {AboutProps} from "."
import { About } from "."

describe("About", () => { 
  it("should render correctly", () => {
    render(<About title="fake-title" about="fake-about"/>)


    expect(screen.getByText('fake-title')).toBeInTheDocument()
    expect(screen.getByText('fake-about')).toBeInTheDocument()
  })
})