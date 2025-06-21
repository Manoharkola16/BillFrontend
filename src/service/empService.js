import axios from "axios"
import axiosInstance from "../components/AxiosInstance/Instance";

let empServices={
    regiUser:async(payload)=>{
       try {
          let data=await axiosInstance.post("/register", payload)
          return data
       } catch (error) {
          console.log(error);
       }
    }
}
export default  empServices