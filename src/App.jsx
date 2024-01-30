import React from 'react'
import './App.css'
import Banner from './components/Banner'
import Day from './components/Day'
import axios from 'axios';

function App() {
  const days = [];
  return (
    <>
      <main className='main'>
        <div className="body-content">
          <hr />
          <h1>Weather Forecast</h1>
          <hr />
          <section className=''>
            <Banner />
            <hr />
            <div className="days d-flex justify-content-between">
              {days.map((day, ind) => (
                <Day key={ind} day={day} />
              ))}
            </div>
          </section>
          <hr />
          <p className='body-text mt-3'>Welcome to my Weather Forecast projects. You can customize code as per your requirement. Happy Coding. </p>
        </div>
      </main>
    </>
  )
}

export default App
