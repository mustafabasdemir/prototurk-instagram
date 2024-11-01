import Input from "components/input";
import { useEffect, useState } from "react";

//footer 
import Footer from "components/footer/footer";

// ---- auth import 
import {Navigate, useNavigate,useLocation,Link} from "react-router-dom";
import { setUser } from "store/auth";

//-- firebase.js login import  
import { login } from "firebase.jsx";
import InstagramLogo from "components/instagramLogo/instagramLogo";
import { Form, Formik } from "formik";
import { LoginValidationSchema } from "validation";
import ImagesModule from "components/images/images";
import LoginButton from "components/buttons/LoginButton";
import FacebbokLogInButton from "components/buttons/FacebbokLogInButton";
import AppsDownload from "components/AppsDownload/AppsDownload";
import { useSelector } from "react-redux";


export default function Login()
{
    const user = useSelector(state=> state.auth.user)
    const [activeIndex, setActiveIndex] = useState(0);
    //auth import set veriable
    const location = useLocation()

    
    useEffect(() => {//login phone ımg loop
      const intervalId = setInterval(() => {
        // Bir sonraki resmi göster
        setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 3000);

      // Temizlik işlevi
      return () => clearInterval(intervalId);
    }, []);

    //kullanıcı varsa yonlendır
    if(user)
      {
        return <Navigate to={location.state?.return_url || '/'} replace={true} />

                /*
        location.state?.return_url: Kullanıcının daha önce gitmek istediği URL'yi alır. 
        eğer yoksa '/' yonlendırılır.


          replace : true =>  Kullanıcı giriş yaptıktan sonra
          genellikle giriş sayfasına geri dönmek istemeyiz.
          Bu nedenle, kullanıcıyı yönlendirdiğimizde replace: true kullanmak mantıklıdır
          böylece kullanıcı geri tuşuna bastığında giriş sayfasına dönmez.

        */
      }

    const handleSubmit = async (values,actions) =>{ //formdaki login butonu tıklandıgında calısacak fonk.
      await login(values.username,values.password)  //formik'in gonderdıgı values degerleirnden aldık
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
            {ImagesModule.images.map((image) => (
              <img
                key={image.id}
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-linear 
                  ${activeIndex === image.id ? "opacity-100" : "opacity-0"}`}
                src={image.src}
                alt=""
              />
            ))}
          </div>
        </div>
        {/* LOGIN PHONE END  */}

        <div className="w-[350px] ">
          {/* LOGIN FORM START */}

          <div className="bg-white border p-[40px] pt-10 pb-6">
            {/* logo */}
            <a href="/#" className="flex justify-center mb-8">
              <InstagramLogo />
            </a>

            {/* login form */}

            <Formik
              validationSchema={LoginValidationSchema}
              initialValues={{
                username: "", //baslangıcta degerleri bos
                password: "",
              }}
              onSubmit={handleSubmit} //form gonderıldıgınde calısacak fonk.
            >
              {/* 
              
              isSubmitting, form gönderilirken true olur ve gönderim tamamlanınca false olur. 
              Bu sayede butonu devre dışı bırakmak veya yükleme göstermek gibi işlemler yapılabilir.

              */}
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="grid gap-y-1.5">
                  {/* username */}
                  <Input
                    type="text"
                    name="username"
                    // value={username}  -- formikten dolayı gerek kalmadı
                    // onChange={(e) => setUsername(e.target.value)}
                    label="Phone number,username or mail"
                  />
                  {/* password */}
                  <Input
                    type="password"
                    name="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                  />

                  {/* login button */}
                  <LoginButton  //components/button
                    type="submit" disabled={!(isValid && values.username && values.password)} 
                    // username ve password boş ise aktif olmasin
                  >
                    Log In
                  </LoginButton>

                  {/* line Or  line*/}
                  <div className="flex items-center my-2.5 mb-3.5">
                    <div className="h-px bg-gray-300 flex-1"></div>
                    <span className="px-4  text-[13px] text-gray-500 font-semibold">
                      OR
                    </span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>

                  {/* facebook login */}
                  <FacebbokLogInButton
                  className="flex items-center mt-8 text-sm font-bold text-blue-600 "
                  />

                  {/* forgot password */}

                  <a href="/#" className="flex justify-center">
                    <button className="flex items-center mt-2 text-sm  text-gray-500">
                      Forgot Password?
                    </button>
                  </a>
                </Form>
              )}
            </Formik>
          </div>

          {/* Sign up container */}
          <div className="bg-white border mt-2 p-4 text-center">
            Don't have an account?
            <Link to="/auth/register" className="font-semibold text-brand ml-2">
              Sign Up
            </Link>
          </div>

          {/* Apps Download */}
          <AppsDownload/>
          

        </div>

        {/* FOOTER */}
        <Footer/>

        {/* </div>  -- bu div ile ilgili acıklama yukarıda*/}
      </>
    );
}