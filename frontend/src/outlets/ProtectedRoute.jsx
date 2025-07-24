import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const [user,setUser] = useState(false)
  return user?<Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoute