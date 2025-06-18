import React from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";

const Register = () => {
  return (
    <div  className='bg-[#efefef] h-full flex justify-center items-center '>
       
    <form action="" className='bg-amber-100 flex justify-center items-center flex-col h-[70%] w-[50%] gap-2 shadow-2xl '> 
   <div>
     <h1 className=' w-100 flex justify-center items-center font-black px-3 text-2xl '>Registration Form</h1>
   </div>
   <div className='bg-[#efefef]  px-3 py-1 border-2 rounded-sm w-100 flex justify-between items-center '>
        <input type="text" name='' placeholder='Enter your name' className='w-100 outline-0' />
        <span><CgNametag /></span>
       </div>

       <div  className='bg-[#efefef] w-100 px-3 py-1 border-2 rounded-l  flex justify-between items-center'>
        <input type="text" name='' placeholder='Enter userName'className='w-100 outline-0'  />
        <span><CgRename /></span>
       </div>

       <div  className='bg-[#efefef] w-100 px-3 py-1 border-2 rounded-l flex justify-between items-center '>
        <input type="email" name='' placeholder='Enter mail id' className='w-100 outline-0' />
        <span><MdAlternateEmail /></span>
       </div>

       <div  className='bg-[#efefef] w-100 px-3 py-1 border-2 rounded-l  flex justify-between items-center'>
        <input type="password" name='' placeholder='Enter password'   className='w-100 outline-0'/>
        <span><TbPasswordFingerprint /></span>
       </div>

       <div  className='bg-[#efefef] w-100 px-3 py-1 border-2 rounded-l flex justify-between items-center '>
        <input type="password"   name='' placeholder='re-write password'  className='w-100 outline-0'/>
        <span><FaRepeat /></span>
       </div>

       <div  className='bg-black w-100 px-3 py-1 border-2 rounded-l text-cyan-50  flex justify-center items-center'>
        <button>Click</button>
       </div>
   </form>
       

    </div>
  )
}

export default Register