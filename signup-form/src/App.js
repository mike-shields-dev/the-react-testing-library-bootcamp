import "./App.css"

function App() {
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
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
            placeholder=''
          />
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            name='confirm-password'
            id='confirm-password'
            placeholder=''
          />
        </div>
      </form>
    </div>
  )
}

export default App
