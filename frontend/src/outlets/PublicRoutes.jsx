import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = ({user=false}) => {
  return user? <Navigate to={'/'}/>:<Outlet />
}

export default PublicRoutes