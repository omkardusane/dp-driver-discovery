import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div className="h-24 mt-1 w-full bg-gray-200 flex flex-col p-4 rounded  mx-auto">
        <h1 className="ml-4 mt-4 text-3xl font-bold text-blue-700 mb-6">Driver Discovery App </h1>
      </div>
      <div className="flex h-screen">
        <div className="w-3/20 bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4 text-gray-300">Menu</h1>
          <ul className=' text-gray-400'>
            <li> <a href="/"> Home </a>  </li>
            <li> <a href="/applicants"> Applicants </a> </li>
            <li> <a href="/"> Jobs </a> </li>
            <li> <a href="/"> Contacts </a> </li>

          </ul>
        </div>
        <div className='min-h-80 mt-4 pb-8 bg-gray-50 rounded w-16/20 rounded mx-auto'>
          <AppRoutes />
        </div>
      </div>

    </ >
  )
}

export default App
