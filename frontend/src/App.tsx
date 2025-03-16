import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default App
