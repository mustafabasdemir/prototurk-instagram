import MainLayout from "pages/layout";
import Home from "pages/home";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import AuthLayout from "pages/auth";
import PrivateRoute from "components/PrivateRoute";
import ProfileLayout from "pages/profile";
import ProfilePosts from "pages/profile/posts";
import ProfileTagged from "pages/profile/tagged";
import Logout from "pages/logout";
import InboxLayout from "pages/inbox/inboxLayout";
import Inbox from "pages/inbox/inbox";
import MessagesBoxChats from "pages/inbox/chat/MessageBox/messagesBoxChats";


const routes =
[
    {
        path:'/',
        element:<MainLayout/>,
        auth:true,  //kullanıcı gririş yapmamıssa home sayfasına girişi engellenir
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
				path: 'logout',
				element: <Logout />
			},
            {
                path: ':username',
                element:<ProfileLayout/>,
                children:[
                    {
                        index:true,
                        element:<ProfilePosts/>
                    },
                    {
                        path:'tagged',
                        element:<ProfileTagged/>
                    }
                ]
            },
            {
				path: 'inbox',
				element: <InboxLayout />,
				children: [
					{
						index: true,
						element: <Inbox />
					},
                    {
						path: ':id',
						element: <MessagesBoxChats />
					}
				]
			}
        ]
    },
    {
        path: '/auth',                    // '/auth' rotası, kimlik doğrulama ile ilgili sayfaların ana rotasıdır.
        element: <AuthLayout />, // Bu rotada, AuthLayout bileşeni dış çerçeve olarak kullanılır.
        children: [                        // Alt rotalar (children) bu rotanın altında tanımlanır.
            {
                path: 'login',             // 'login' rotası, '/auth/login' yolunu oluşturur.
                element: <Login />         // Bu rota çağrıldığında Login bileşeni görüntülenir.
            },
            {
                path:'register',
                element:<Register/>
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