import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import App from './App'
import Navbar from './components/Navbar'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    </Router>
  )
}

export default AppRouter