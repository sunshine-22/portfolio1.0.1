import React from 'react'
import { TestimondiaData } from '@/Database/TestimonialData'
import Image from 'next/image'

export default function Profiles() {
  return (
    <div> 
        <div className='text-center mt-10'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Testimonials 👋</p>
        </div>
        <div className='mt-7 flex flex-wrap'>
          {
            TestimondiaData.map((data)=>{
              return(
                <div className='border h-[200px] w-[400px] rounded-md cursor-pointer ml-7' key={data.id}>
                  <p className='font m-2 text-[16px]'>{data.description}</p>
                  <div className='m-2 flex'>
                    <div>
                      <p className='font-bold text-2xl'>{data.author}</p>
                      <p className='text-[13px]'>{data.Designation}</p>
                    </div>
                  
                    <div className='ml-auto rounded-full w-[50px] h-[50px] cursor-pointer'>
                      <img className='rounded-full' src={data.image} alt=''></img>
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
