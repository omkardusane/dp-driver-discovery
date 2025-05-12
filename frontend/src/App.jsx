import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="h-24 bg-gray-100 flex flex-col p-4 rounded">
        <h1 className=" ml-4 mt-4 text-4xl font-bold text-blue-700 mb-6">Driver Discovery</h1>
      </div>
      <div className='min-h-80 mt-4 pb-8 bg-gray-50 rounded'>
        <p className="text-gray-700 mb-4 ml-8 mr-8 transition hover:-translate-y-1 hover:scale-110 ">
          Welcome to Driver Discovery!
          Here you will be able to filters the drivers connected to The Company Applicants API.
        </p>
        <div className='items-center justify-center flex'>

          <button className='w-md text-white font-bold py-2 px-4 rounded transition delay-50 duration-200 ease-in-out  hover:scale-110  bg-blue-400 hover:bg-blue-600 '>
            Enter the portal now!
          </button>
        </div>
      </div >
    </>
  )
}

export default App
