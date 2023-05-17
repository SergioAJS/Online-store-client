import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {SHOP_ROUTE} from '../utils/consts'

export const PrivateRoute = ({children}) => {
  const location = useLocation()
  const { user } = useAuth()

  if (user.role !== 'ADMIN') {
    return <Navigate to={SHOP_ROUTE} state={{from: location}}/>
  }

  return children
}