import Yup from "./validate";

/*

    login.jsx de formık kutuphanesının validation ozelliğine bu semayı vereceğiz 
    username ve password alanları zorunlu olacak

*/

export const LoginValidationSchema = Yup.object().shape({
    username : Yup.string().required(),
    password : Yup.string().required()
})