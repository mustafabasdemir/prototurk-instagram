import  * as Yup from "yup"

Yup.setLocale({
    mixed:{
        required: "Bu alan zorunludur !" //semadaki required alanlar için hata mesajı sağlar
    }
})

export default Yup