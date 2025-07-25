import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import App from './pages/homepage'
import Navbar from './components/Navbar'
import Test from './pages/test'
import PublicRoutes from './outlets/PublicRoutes'
import ProtectedRoute from './outlets/ProtectedRoute'
import Login from './pages/login'
import Signup from './pages/signup'
import Aboutpage from './pages/about'
import Postspage from './pages/post'
import Footer from './components/Footer'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route  element={<PublicRoutes />} >
              <Route path='/' element={<App />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/about' element={<Aboutpage />} />
              <Route path='/posts' element={<Postspage />} />
            </Route>
            <Route path='/test' element={<ProtectedRoute />} >
              <Route path='/test' element={<Test />} />
            </Route>
        </Routes>
              <Footer />
    </Router>
  )
}

export default AppRouter