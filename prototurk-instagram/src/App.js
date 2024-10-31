import Loader from "components/loader/loader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import routes from "routes";

function App() {

  const user = useSelector(state=> state.auth.user)
  const showRoutes = useRoutes(routes);
  const navigate = useNavigate();
  const [redirect , setRedirect] = useState(false)

  useEffect(()=>{

    let timeout = setTimeout(() => {
      setRedirect(true)
    }, 1200)
    return()=>{
      clearTimeout(timeout)
    }
  })

  
  if(!user && !redirect)
  {
   return <Loader/>
  }

  return (
    <>
    {showRoutes}
    </>

  )

}

export default App;
