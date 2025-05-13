import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  return (
    <>
      <div className="h-24 mt-1 w-full bg-gray-200 flex flex-col p-4 rounded  mx-auto">
        <h1 className="ml-2 mt-4 text-3xl font-bold text-blue-400 mb-6 font-mono">Driver Discovery App </h1>
      </div>
      <div className="flex h-screen">
        <div className="w-3/20 bg-gray-100 p-4 font-mono">
          <h1 className="text-2xl font-bold mb-4 text-gray-300">Menu</h1>
          <ul className=' text-gray-400 '>
            <li className='hover:cursor-pointer' onClick={() => navigate("/")}> Home </li>
            <li className='hover:cursor-pointer' onClick={() => navigate("/applicants")}> Applicants </li>
            <li className='hover:cursor-pointer' onClick={() => navigate("/")}> Jobs </li>
            <li className='hover:cursor-pointer' onClick={() => navigate("/applicants")}> Contacts </li>
          </ul>
        </div>
        <div className='min-h-80 mt-4 pb-8 bg-gray-50 rounded w-16/20 rounded mx-auto'>
          <AppRoutes />
        </div>
      </div >

    </ >
  )
}

export default App
