import Yup from "./validate";

/*

    login.jsx de formık kutuphanesının validation ozelliğine bu semayı vereceğiz 
    username ve password alanları zorunlu olacak

*/

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  full_name: Yup.string().required(),
  username: Yup.string()
                .required()
                .test('is-valid-username', 'Geçerli bir kullanıcı adı girin', str => /^[a-zA-Z0-9\.]+$/.test(str)),
  password: Yup.string().required(),
});