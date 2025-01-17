import { Navigate } from "react-router"
import { auth } from "../Firebase/Firebasefile"
import { useAuthState } from 'react-firebase-hooks/auth';


const Private = ({children}) => {
  
    const [user] = useAuthState(auth)
    if (!user) {
      return <Navigate to={'/Login'}></Navigate>  
    }
    else{
        return children
    }
  
}

export default Private