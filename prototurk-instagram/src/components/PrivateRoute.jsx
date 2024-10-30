import { useSelector } from "react-redux";
import { Navigate , useLocation} from "react-router-dom"

export default function PrivateRoute({children}){

    const user = useSelector(state=>state.auth.user)  //store/auth içideki initialState içindeki user durumunu aldık

    const location = useLocation(); // Kullanıcının mevcut konumu
    if(!user)  //kulanici giriş yapmadıysa giriş sayfasına yonlendırme yapılır
    {
        return <Navigate to="/auth/login" replace={true} state={{
            return_url:useLocation.pathname
        }}/>
    }
    
    return children

}