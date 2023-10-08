import React from 'react'
import { SkillData } from '@/Database/SkillsData'
import Image from 'next/image';


export default function Skills() {
    const svg_to_image = (image_data : string) =>{
        const buff = new Buffer(image_data);
        const base64data = buff.toString('base64');
        return <Image src={`data:image/svg+xml;base64,${base64data }`} alt="" />
    }
  return (
    <div>
        <div className='text-center mt-10'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>Skills 👋</p>
        </div>
        <div className='flex mt-16 container ml-11 justify-evenly'>
            {
                SkillData.map((data)=>{
                    return(
                    <div className='h-[100px] w-[100px]'>
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
