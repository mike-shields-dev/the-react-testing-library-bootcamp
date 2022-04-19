import "./App.css"
import { useState } from "react"
import validator from "validator"

function App() {
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")

  function handleChange(event) {
    const { name, value } = event.target
    setSignUpInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleClick(event){
    event.preventDefault()
    if(!validator.isEmail(signUpInput.email)) {
      setError("The email you input is invalid")
    } 
  }

  return (
    <div className='container my-5'>
      <form>
        <div className='mb-3'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='email'
            placeholder=''
            value={signUpInput.email}
            onChange={handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
            placeholder=''
            value={signUpInput.password}
            onChange={handleChange}
          />
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            name='confirmPassword'
            id='confirm-password'
            placeholder=''
            value={signUpInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error ? <p className='text-danger'>{error}</p> : null}
        <button 
          type='submit'
          className="btn btn-primary"
          onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default App
