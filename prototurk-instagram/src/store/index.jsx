import { configureStore } from "@reduxjs/toolkit";
import auth from "store/auth"


const store = configureStore({
    reducer:{
        auth  //store içindeki auth reduceri tanimladık
    }
})

export default store