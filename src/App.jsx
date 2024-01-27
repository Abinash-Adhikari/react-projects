import React from 'react'
import './App.css'
import me from './assets/me.jpg'

function App() {

  return (
    <>
      <main className='main'>
        <div className="body-content">
          <h1> Hello, I'm <a className='text-danger' href="http://adhikariabinash.com.np" target="_blank" rel="noopener noreferrer">Er. Abinash Adhikari</a></h1>
          <img className='my-img' src={me} alt="Abinash Adhikari" />
          <p className='body-text mt-3'>Welcome to my reaject projects. Just checkout branches and run code. You can customize code as per your requirement. Happy Coding. </p>
        </div>
      </main>
    </>
  )
}

export default App
