import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("inputs should be initially empty", () => {
  render(<App />)

  const emailInputElement = screen.getByRole("textbox")
  const passwordInputElement = screen.getByLabelText("Password")
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i)

  expect(emailInputElement.value).toBe("")
  expect(passwordInputElement.value).toBe("")
  expect(confirmPasswordInputElement.value).toBe("")
})

test("should be able to type an email", () => {
  render(<App />)

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  })
  const emailAddress = "emailaddress@emailprovider.com"

  userEvent.type(emailInputElement, emailAddress)
  expect(emailInputElement.value).toBe(emailAddress)
})

test("should be able to type a password", () => {
  render(<App />)

  const password = "password123"
  const passwordInputElement = screen.getByLabelText("Password")

  userEvent.type(passwordInputElement, password)

  expect(passwordInputElement.value).toBe(password)
})

test("should be able to type a confirm password", () => {
  render(<App />)

  const password = "password123"
  const passwordInputElement = screen.getByLabelText(/confirm password/i)

  userEvent.type(passwordInputElement, password)

  expect(passwordInputElement.value).toBe(password)
})

test("should show email error message on invalid email", () => {
  render(<App />)
  let emailErrorElement = screen.queryByText(/the email you input is invalid/i)
  const emailInputElement = screen.getByRole("textbox", { name: /email/i })
  const invalidEmail = "notavalidemailgmail.com"
  const submitButton = screen.getByRole("button", { name: /submit/i })

  expect(emailErrorElement).not.toBeInTheDocument()

  userEvent.type(emailInputElement, invalidEmail)
  userEvent.click(submitButton)

  emailErrorElement = screen.queryByText(/the email you input is invalid/i)

  expect(emailErrorElement).toBeInTheDocument()
})
