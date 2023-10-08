import React from 'react'
import { ProjectData } from '@/Database/ProjectData'
import Image from 'next/image'
export default function Projects() {
  return (
    <div>
        <div className='text-center mt-10'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>My Projects 👋</p>
        </div>
        <div className='flex justify-evenly mt-10 flex-wrap'>
            
                {
                    ProjectData.map((data)=>{
                        return(
                        <div className='w-[90%] rounded-lg h-[400px] bg-sky-800 mt-3 transition ease-in-out delay-1000 hover:-translate-y-2 hover:scale-110 hover:bg-sky-500 duration-700'>
                            <div className='m-4 grid grid-cols-12'>
                                <div className='col-span-7 h-[380px]'>
                                    <p className='p-7 font-bold text-5xl'>{data.title}</p>
                                    <p className='pt-1 pl-7 font-mono text-[18px]'>{data.Description}</p>
                                    <div className='flex mt-4 ml-7'>
                                        {
                                            data.Stacks.map((data)=>{
                                                return(
                                                    <div className='w-[50px] h-[50px] rounded-full bg-white ml-2'>
                                                        <Image src={data} className='p-[8px]' alt=''></Image>
                                                    </div>
                                                )
                                            })
                                        }
                                      
                                    </div>
                                    <div className='flex mt-7 ml-7'>
                                        <div className='flex  h-[40px] rounded-lg bg-slate-400 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className='p-[3px]'><path fill="currentColor" fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" clip-rule="evenodd"/></svg>
                                            <p className='p-[5px] font-bold text-[20px]'>Source Code</p>
                                        </div>
                                        <div className='flex  h-[40px] rounded-lg bg-sky-400 ml-5 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className='p-[7px]'><path fill="white" d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2c0 .37-.03.73-.08 1.08c.69.1 1.33.32 1.92.64c.1-.56.16-1.13.16-1.72c0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0 1 13 19c0-.29.03-.57.07-.85c-.32.63-.67 1.24-1.07 1.81c-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 0 1 2.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.65 15.65 0 0 0-1.38-3.56M23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3Z"/></svg>
                                            <p className='p-[5px] font-bold text-[20px]'>Web Client</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-5 col-span-5'>
                                    <div className='border m-5 h-[300px] rounded-lg'>
                                        <Image src={data.image} alt='' />
                                    </div>
                                </div>
                        </div>
                        </div>
                        )
                    })
                }
               
           
           
        </div>
    </div>
  )
}
