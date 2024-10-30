import store from "store"
import { setUser } from "store/auth"

export const userHandle = data =>{
    //kullanıcı doğrulandıktan sonra setUser ile kullanıcı durumunu değiştirir
    //bunu firebase.jsx te cağıracazı
    store.dispatch(setUser(data))
}

