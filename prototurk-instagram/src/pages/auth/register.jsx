import Input from "components/input";

//footer 
import Footer from "components/footer/footer";

// ---- auth import 
import { useNavigate,useLocation, Link } from "react-router-dom";

//-- firebase.js login import  
import { register } from "firebase.jsx";
import InstagramLogo from "components/instagramLogo/instagramLogo";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "validation";
import LoginButton from "components/buttons/LoginButton";
import FacebbokLogInButton from "components/buttons/FacebbokLogInButton";
import AppsDownload from "components/AppsDownload/AppsDownload";
import { Helmet } from "react-helmet";


export default function Register()
{
    //auth import set veriable
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (values,actions) =>{ //formdaki login butonu tıklandıgında calısacak fonk.
      const response =await register(values.email,values.username,values.username,values.password)  //formik'in gonderdıgı values degerleirnden aldık
      if(response)
      {
        navigate(location.state?.return_url || '/',{replace:true   })
      }
      //login.jsx de aciklamasi mevcut
    }

    return (
      <>
        <div className="w-[350px] ">

        <Helmet>
				<title>Register - Instagram</title>
			  </Helmet>

          {/* LOGIN FORM START */}
          <div className="bg-white border p-[40px] pt-10 pb-6">
            {/* logo */}
            <a href="/#" className="flex justify-center mb-4">
              <InstagramLogo />
            </a>

            {/* register text */}
            <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
                Sign up to see photos and videos from your friends.
            </p>

            {/* facebbok button */}
            <FacebbokLogInButton
                className="h-[30px] flex items-center justify-center gap-x-2 mt-1 rounded text-sm font-medium w-full text-center text-sm text-white bg-brand"
            />

            {/* line Or  line*/}
            <div className="flex items-center my-2.5 mb-3.5">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="px-4  text-[13px] text-gray-500 font-semibold">
                  OR
                </span>
                <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* login form */}

            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{
                email:"",
                full_name:"",
                username: "", 
                password: "",
              }}
              onSubmit={handleSubmit} 
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="grid gap-y-1.5">
                  {/* email */}
                  <Input name="email" label="Email"/>
                  {/* Full Name */}
                  <Input name="full_name" label="Full Name"/>
                  {/* username */}
                  <Input name="username" label="Username"/>
                  {/* password */}
                  <Input type="password" name="password" label="Password" />

                  <p className="text-xs text-[#8e8e8e] py-2">
					            People who use our service may have uploaded your contact information to Instagram. <a href="#" className="font-semibold">Learn More</a>
					            <br/><br/>
					            By signing up, you agree to our <a href="#" className="font-semibold">Terms</a>, <a href="#" className="font-semibold">Data Policy</a> and 
                      <a href="#" className="font-semibold">Cookies Policy</a>.
					        </p>

                  {/* sign button */}
                  <LoginButton //components/button
                    type="submit"
                    disabled={!(isValid && values.username && values.password)}
                    // username ve password boş ise aktif olmasin
                  >
                    Sign Up
                  </LoginButton>

                  
                </Form>
              )}
            </Formik>
          </div>

          {/* Sign up container */}
          <div className="bg-white border mt-2 p-4 text-center">
            Have an account?
            <Link to="/auth/login" className="font-semibold text-brand ml-2">
                Log in
            </Link>
          </div>

          {/* Apps Download */}
          <AppsDownload/>
        
        </div>

        {/* FOOTER */}
        <Footer />
      </>
    );
}