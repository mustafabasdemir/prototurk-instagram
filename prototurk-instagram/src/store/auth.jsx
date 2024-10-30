import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    user:false  
    //kullanıcı baslangıcta giriş yapmamıs olacak
} 

const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser :(state,action) =>{
            state.user = action.payload 
            //setUser ile kullanıcı durumu güncellenir
            //payload: Eyleme eklenmek istenen veriyi içerir. Örneğin, kullanıcı bilgileri veya kullanıcı durumu.
        }
    }

})

// Burada, setUser eylemini dışa aktarıyoruz, böylece diğer bileşenlerden bu eylemi çağırabiliriz.
export const {setUser} = auth.actions
/*
export default auth.reducer, auth slice'ının reducer fonksiyonunu dışa aktarıyor. 
Bu, başka dosyalarda bu reducer'ı kullanabilmeyi sağlar.
*/
export default auth.reducer