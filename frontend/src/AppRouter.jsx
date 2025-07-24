import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import App from './pages/homepage'
import Navbar from './components/Navbar'
import Test from './pages/test'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/test' element={<Test />} />
        </Routes>
    </Router>
  )
}

export default AppRouter