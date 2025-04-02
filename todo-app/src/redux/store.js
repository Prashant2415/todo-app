import {configureStore} from "@reduxjs/toolkit"
import taskSliceReducer from "./taskSlice"
export const store = configureStore({
    reducer:{
        taskSlice: taskSliceReducer
    }
})