import React from 'react'
import { SkillData } from '@/Database/SkillsData'
import Image from 'next/image';


export default function Skills() {
    const svg_to_image = (image_data : string) =>{
        const buff = new Buffer(image_data);
        const base64data = buff.toString('base64');
        return <img src={`data:image/svg+xml;base64,${base64data }`} alt="no image" />
    }
  return (
    <div>
        <div className='text-center mt-10'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Skills 👋</p>
        </div>
        <div className='flex mt-16 container ml-1 md:ml-11 flex-wrap justify-evenly'>
            {
                SkillData.map((data)=>{
                    return(
                    <div className='h-[80ox] md:h-[140px] w-[80px] md:w-[140px] m-1 md:m-5' key={data.id}>
                        {
                            svg_to_image(data.image)
                        }
                    </div>
                    )
                })
            }
          
        </div>
    </div>
        
  )
}
