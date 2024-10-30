import { ImFacebook2 } from "react-icons/im";
import Input from "components/input";
import { useEffect, useState } from "react";

// ---- auth import 
import { useNavigate,useLocation } from "react-router-dom";
import { setUser } from "store/auth";

//-- firebase.js login import  
import { login } from "firebase.jsx";

export default function Login()
{

    const [activeIndex, setActiveIndex] = useState(0);

    //log in button enabled , disabled settings
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const enable = username && password;

    //auth import set veriable
    const navigate = useNavigate()
    const location = useLocation()

    
    useEffect(() => {//login phone ımg loop
      const intervalId = setInterval(() => {
        // Bir sonraki resmi göster
        setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 3000);

      // Temizlik işlevi
      return () => clearInterval(intervalId);
    }, []);


    const handleSubmit = async e =>{ //formdaki login butonu tıklandıgında calısacak fonk.
      e.preventDefault()
      await login(username,password)

      navigate(location.state?.return_url || '/',{
        replace:true 
        /*
        location.state?.return_url: Kullanıcının daha önce gitmek istediği URL'yi alır. 
        eğer yoksa '/' yonlendırılır.


          replace : true =>  Kullanıcı giriş yaptıktan sonra
          genellikle giriş sayfasına geri dönmek istemeyiz.
          Bu nedenle, kullanıcıyı yönlendirdiğimizde replace: true kullanmak mantıklıdır
          böylece kullanıcı geri tuşuna bastığında giriş sayfasına dönmez.

        */
      })
    }

    return (
        <>
          {/* 
          
          <div className="h-full w-full flex  flex-wrap overflow-auto gap-x-8  justify-center my-24"> 
          
          -- buradaki div  auth/index js de dıs cerceve olarak olarak ayalandi bu login sayfası 
          -- children olarak ayarlandı auth/index js de dıs cerceve içine geliyor routes.js sayfasında ayarlandı
          */}
            {/* LOGIN PHONE START */}
            {/* login phone / relative: sayfada yerini korur*/}
            <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
              {/* phone picture */}
              <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]">
                <img
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000  ease-linear ${
                    activeIndex === 0 ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot3-2x.png?__d=www"
                  alt=""
                />
                <img
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000  ease-linear ${
                    activeIndex === 1 ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot2-2x.png?__d=www"
                  alt=""
                />
                <img
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000  ease-linear ${
                    activeIndex === 2 ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot4-2x.png?__d=www"
                  alt=""
                />
                <img
                  className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000  ease-linear ${
                    activeIndex === 3 ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www"
                  alt=""
                />
              </div>
            </div>
            {/* LOGIN PHONE END  */}
    
            <div className="w-[350px] ">
              {/* LOGIN FORM START */}
    
              <div className="bg-white border p-[40px] pt-10 pb-6">
                {/* logo */}
                <a href="/#" className="flex justify-center mb-8">
                  <img
                    className="h-[51px]"
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_wordmark_logo_icon_169660.png"
                    alt=""
                  />
                </a>
    
                {/* login form */}
                <form onSubmit={handleSubmit} className="grid gap-y-1.5">
                  {/* username */}
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label="Phone number,username or mail"
                  />
                  {/* password */}
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                  />
    
                  {/* login button */}
                  <button
                    type="submit"
                    disabled={!enable}
                    className="h-[30px] rounded bg-brand text-white text-sm disabled:opacity-30"
                  >
                    Log In
                  </button>
    
                  {/* line Or  line*/}
                  <div class="flex items-center my-2.5 mb-3.5">
                    <div class="h-px bg-gray-300 flex-1"></div>
                    <span class="px-4  text-[13px] text-gray-500 font-semibold">
                      OR
                    </span>
                    <div class="h-px bg-gray-300 flex-1"></div>
                  </div>
    
                  {/* facebook login */}
                  <a href="/#" className="flex justify-center">
                    <button className="flex items-center mt-8 text-sm font-bold text-blue-600">
                      <ImFacebook2 className="mr-2" />
                      Log in with Facebook
                    </button>
                  </a>
    
                  {/* forgot password */}
    
                  <a href="/#" className="flex justify-center">
                    <button className="flex items-center mt-2 text-sm  text-gray-500">
                      Forgot Password?
                    </button>
                  </a>
                </form>
              </div>
    
              {/* Sign up container */}
              <div className="bg-white border mt-2 p-4 text-center">
                Don't have an account?
                <a href="/#" className="font-semibold text-brand ml-2">
                  Sign Up
                </a>
              </div>
    
              {/* Apps Download */}
    
              <div className="bg-zinc-50 mt-2 p-4 text-center">
                Get the app.
                <div className="flex justify-center mt-2">
                  {/* Flex  box */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE12098AA-DAD2-41DA-863D-FF66D6ED0B42%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"
                      alt=""
                      className="mr-2 max-h-10"
                    />
                  </a>
    
                  <a
                    href="https://microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"
                      alt=""
                      className="max-h-10" // Max height ayarı
                    />
                  </a>
                </div>
              </div>
            </div>
    
            {/* FOOTER */}
    
            <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 fixed bottom-0">
              <div class=" py-16">
                <p class="flex justify-center flex-wrap gap-x-4 text-xs  text-gray-500">
                  <span>Meta</span>
                  <span>About</span>
                  <span>Blog</span>
                  <span>Jobs</span>
                  <span>API</span>
                  <span>Privacy</span>
                  <span>Terms</span>
                  <span>Top Accounts</span>
                  <span>Instagram Lite</span>
                  <span>Threads</span>
                  <span>Visual Arts</span>
                  <span>Meta Verified</span>
                </p>
                <p className="justify-center text-center mt-2 text-xs  text-gray-500">© 2024 Instagram from Meta</p>
              </div>
            </footer>
    
            
          {/* </div>  -- bu div ile ilgili acıklama yukarıda*/}
        </>
      );
}