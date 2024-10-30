import Loader from "components/loader/loader";
import { useSelector } from "react-redux";
import { useNavigate, useRoutes } from "react-router-dom";
import routes from "routes";

function App() {

  const user = useSelector(state=> state.auth.user)
  const showRoutes = useRoutes(routes);
  const navigate = useNavigate();
  
  if(!user)
  {
   return <Loader/>
  }

  return user && (
    <>
    {showRoutes}
    </>

  )

}

export default App;
