import { ImFacebook2 } from "react-icons/im";

export default function FacebbokLogInButton({ className }){

    return (
      <a href="/#" className="flex justify-center">
        <button className={className}>
          <ImFacebook2 className="mr-2" />
          Log in with Facebook
        </button>
      </a>
    );


}