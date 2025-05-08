
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <AppRoutes/>
      <ToastContainer/>
    </>
  )
}

export default App
