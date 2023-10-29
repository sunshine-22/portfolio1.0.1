import React from 'react'
import { ExperienceData } from '@/Database/ExperienceData'
import Link from 'next/link'

export default function Experience() {
  return (
    <div>
        <div className='text-center mt-5'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Experience 👋</p>
        </div>
        <div className='flex mt-16 container ml-1 md:ml-11 flex-wrap justify-evenly'>
       {
        ExperienceData.map((experience_data)=>{
            return(
                
                <div className='border m-1 md:w-[600px] md:max-h-[300px] md:m-5 rounded-[10px] shadow-md hover:border-lime-500 overflow-auto' key={experience_data.id}>
                    <div className='flex'>
                        <Link href={experience_data.link}>
                        <p className='pt-3 pl-3 font-semibold text-lg md:text-xl'>{experience_data.position} . {experience_data.organization} </p>
                        </Link>
                        <span className='pt-3 pl-1 font-bold cursor-pointer mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="darkgrey" fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd"/></svg></span>
                        <div className='ml-auto m-1 mt-3 rounded-lg bg-lime-500 hidden md:block'>
                            <p className='pl-1 pr-1 text-sm md:text-md'>{experience_data.duration}</p>
                        </div>
                    </div>
                    <div className='m-2 font-mono text-[13px] md:text-[15px]'>
                        <p>{experience_data.Description}</p>
                    </div>
                    <div className='flex mt-5 flex-wrap'>
                        {
                            experience_data.skills.map((data,key)=>{
                                return(
                                    <div className='rounded-lg bg-sky-300 ml-2 mb-2 hover:bg-purple-500' key={key}>
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
