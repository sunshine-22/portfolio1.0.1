import React from 'react'
import { ExperienceData } from '@/Database/ExperienceData'

export default function Experience() {
  return (
    <div>
        <div className='text-center mt-5'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Experience 👋</p>
        </div>
        <div className='flex mt-16 container ml-11 justify-evenly'>
       {
        ExperienceData.map((experience_data)=>{
            return(
                
                <div className='border w-[530px] rounded-[10px] shadow-md hover:border-lime-500'>
                    <div className='flex'>
                        <p className='pt-3 pl-3 font-semibold text-xl'>{experience_data.position} . {experience_data.organization} </p><span className='pt-3 pl-1 font-bold cursor-pointer mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="darkgrey" fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"/></svg></span>
                        <div className='ml-auto h-[23px] m-1 mt-3 rounded-lg bg-lime-500'>
                            <p className='pl-1 pr-1'>{experience_data.duration}</p>
                        </div>
                    </div>
                    <div className='m-2 font-mono text-[15px]'>
                        <p>{experience_data.Description}</p>
                    </div>
                    <div className='flex mt-5'>
                        {
                            experience_data.skills.map((data)=>{
                                return(
                                    <div className='rounded-lg bg-sky-300 ml-2 mb-1 hover:bg-purple-500'>
                                        <p className='p-1 font-semibold'>{data}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
           
            )
        })
       }
        </div>
    </div>
  )
}
