import Login from "pages/login";
import Home from "pages/home";

const routes =
[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/auth',
        element:<Login/>
    }
]

export default routes