import { useContext } from "react"
import { Context } from "../index"

const useAuth = () => {
  return useContext(Context)
}

export default useAuth;