import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";
import { validatePassword } from 'val-pass';
import toast from 'react-hot-toast'
import empServices from '../../service/empService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let [formData,setFormData]=useState({
    name:"",
    userName:"",
    email:"",
    password:""
  })
  const[matched,setMatched]=useState(true)
  const [errorMessage,setErrorMessage]=useState("")
  const navigate=useNavigate()
    
  let handleCheckPassword=(e)=>{
    let {value}=e.target
    formData.password !=value? setMatched(false) : setMatched(true)
    value==""&&setMatched(true)
  }

  let handleChange=(e)=>{
     let{name,value}=e.target
    if (name=="password") {
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      // console.log(getAllValidationErrorMessage);
      validateAll() ?setErrorMessage(""): setErrorMessage(getAllValidationErrorMessage);
      value==""&&setErrorMessage("")
    } 
      setFormData({...formData,[name]:value})

     

  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    let {name,userName,email,password}=formData
    if(!name || !userName || !email || !password){
      toast.error("All fields are madatory")
      return 
    }
    let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!matched){
      toast.error("password and confirmPassword are not matched")
    }
    console.log(formData);
   
    (async()=>{
       let data= await empServices.regiUser(formData)
     try {
      if(data.status==201){
        toast.success("Register succssfully")
        navigate("/login")
      }else{
        toast.error("something went wrong")
      }

     } catch (error) {
      
     }
    })()
  }

  return (
    <div  className='bg-[#efefef] h-full flex justify-center items-center '>
       
    <form action="" className='bg-amber-100 flex justify-center items-center flex-col h-90% w-1/2 gap-8 py-10 px-10 shadow-2xl max-sm:w-[90%]  rounded-2xl' onSubmit={handleSubmit}> 
   <div className='flex justify-center items-center w-full h-10 '>
     <h1 className=' font-black  px-3 text-2xl max-sm:text-sm  '>Registration Form</h1>
   </div>
   <div className='bg-[#efefef]  px-3 py-1 border-2 rounded-sm w-full flex justify-between items-center '>
        <input type="text" name='name' placeholder='Enter your name' className='w-full outline-0  '  onChange={handleChange} />
        <span><CgNametag /></span>
       </div>

       <div  className='bg-[#efefef] w-full px-3 py-1 border-2 rounded-l  flex justify-between items-center'>
        <input type="text" name='userName' placeholder='Enter userName'className='w-full outline-0'  onChange={handleChange} />
        <span><CgRename /></span>
       </div>

       <div  className='bg-[#efefef] w-full px-3 py-1 border-2 rounded-l flex justify-between items-center '>
        <input type="email" name='email' placeholder='Enter mail id' className='w-full outline-0'  onChange={handleChange}/>
        <span><MdAlternateEmail /></span>
       </div>

       <div  className='bg-[#efefef] w-full px-3 py-1 border-2 rounded-l  flex justify-between items-center'>
        <input type="password" name='password' placeholder='Enter password'   className='w-full outline-0' onChange={handleChange}/>
        <span><TbPasswordFingerprint /></span>
       </div>

       <div  className={errorMessage? 'w-full px-3 py-1  flex justify-between items-center':"hidden"}>
          <span className='text-red-500'>*{errorMessage}</span>
       </div>

       <div  className={`bg-[#efefef] w-full px-3 py-1 border-2 rounded-l flex justify-between items-center ${matched? "border-black" : "border-red-600"} `}>
        <input type="password"   name='' placeholder='re-write password'  className='w-full outline-0' onChange={handleCheckPassword}/>

        <span><FaRepeat /></span>
       </div>

       <div  className='bg-black w-full px-3 py-1 border-2 rounded-l text-cyan-50  flex justify-center items-center hover:bg-gray-700 hover:accent-cyan-500 hover:active:scale-[0.9]'>
        <button className='font-bold text-white w-full'>Click</button>
       </div>
   </form>
       

    </div>
  )
}

export default Register