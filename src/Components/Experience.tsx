import React from 'react'
import { ExperienceData } from '@/Database/ExperienceData'
import Link from "next/link";
import "./about.css"
import Image from 'next/image'



export default function Experience() {
    const Experience = Math.floor(ExperienceData.length / 2);
    const firstHalf = ExperienceData.slice(0, Experience);
    const secondHalf = ExperienceData.slice(Experience);
   
  return (
    <div>
        <div className='text-center mt-5'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Experience 👋</p>
        </div>
        <div className='flex justify-center'>
            {
                <main className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                    
                        <section>
                            {
                            firstHalf.map((experience_data)=>{
                                return(
                                    <div className='border-l-2 border-grey-300 pt-0 pr-10 content'>
                                        <div className='box m-5 w-[400px] sm:w-[500px]'> 
                                            <Link href={experience_data.link}><Image src={experience_data.image} alt="" className='box-image'/></Link>
                                            <p className='text-[15px] text-gray-400'>{experience_data.duration}</p>
                                            <p className='font-bold text-red-500'>{experience_data.position}</p>
                                            <p className='text-[14px] line-clamp-4 hover:line-clamp-none'>{experience_data.Description}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </section>
                        <section>
                        {
                        secondHalf.map((experience_data)=>{
                            return(
                                <div className='border-l-2 border-grey-300 pt-0 pr-10 content'>
                                    <div className='box m-5 w-[400px] sm:w-[500px]'> 
                                    <Link href={experience_data.link}><Image src={experience_data.image} alt="" className='box-image'/></Link>
                                        <p className='text-[15px] text-gray-400'>{experience_data.duration}</p>
                                        <p className='font-medium text-red-500'>{experience_data.position}</p>
                                        <p className='text-[14px] line-clamp-4 hover:line-clamp-none'>{experience_data.Description}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </section>
                    
            
                </main>
            }
        </div>
    </div>
  )
}
