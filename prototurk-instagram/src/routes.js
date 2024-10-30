import Login from "pages/login";
import Home from "pages/home";
import AuthLayout from "pages/auth";
import PrivateRoute from "components/PrivateRoute";

const routes =
[
    {
        path:'/',
        element:<Home/>,
        auth:true  //kullanıcı gririş yapmamıssa home sayfasına girişi engellenir
    },
    {
        path: '/auth',                    // '/auth' rotası, kimlik doğrulama ile ilgili sayfaların ana rotasıdır.
        element: <AuthLayout />,           // Bu rotada, AuthLayout bileşeni dış çerçeve olarak kullanılır.
        children: [                        // Alt rotalar (children) bu rotanın altında tanımlanır.
            {
                path: 'login',             // 'login' rotası, '/auth/login' yolunu oluşturur.
                element: <Login />         // Bu rota çağrıldığında Login bileşeni görüntülenir.
            }
        ]
    }
    //burada auth içinde /login olursa dıs cerceve içine login elementleri veya /register gelirse register
    //içeriği dıs cerceve içine yuklenecek


]





const authCheck = routes => routes.map(route=>{

    /*
        burada yukarıdaki routesleri map ile dönüp içinnde auth özelliği 
        varsa privateroutes jsx dosyasına gidip user giriş yapmıs mı yapmamıs mı 
        kontrol ediyor. bunları children alt sayfalar varsa onları da privateroute 
        ile kontrol ediyor. giriş yapılmadıysa privateRoute.jsx dosyasında yonlendırme işlemi var 
    */

    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    
    if(route?.children){
        route.children = authCheck(route.children)
    }
    
    return route

})

export default authCheck(routes)