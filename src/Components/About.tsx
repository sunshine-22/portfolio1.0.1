import React from 'react'
import Image from 'next/image'
import dev from "../../public/profile2.jpeg"

export default function About() {
  return (
   <div>
        <div className='text-center mt-5'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>About me 👋</p>
        </div>
        <div className='grid grid-cols-12 gap-1 place-content-center mt-11'>
            <div className='col-start-1 col-end-12 md:col-end-8 ml-5 md:ml-11'>
                <p className='font-mono text-[15px] md:text-[17px]'>A skilled Fullstack Developer with expertise in both front-end and back-end technologies. Committed to delivering high-quality web applications, proficient in multiple programming languages, and adept at collaborating with cross-functional teams to create seamless user experiences and Dedicated to implementing continuous integration, deployment, and monitoring strategies to enhance software delivery. A problem solver with a strong background in infrastructure as code and cloud technologies.</p>
                <p className='mt-3'></p>
                <p className='font-mono text-[15px] md:text-[17px]'>
                I thrive at the intersection of data and technology, transforming raw information into actionable insights. With a robust background in database management, ETL processes, and data warehousing, I specialize in designing, implementing, and optimizing data pipelines to empower informed decision-making
                </p>
                <p className='mt-3'></p>
                <p className='font-mono text-[15px] md:text-[17px]'>
                I've honed my skills in various programming languages and frameworks, mastering the art of crafting robust, scalable, and user-centric applications.
                </p>
            </div>
            <div className='col-start-9 col-end-12 hidden md:block'>
                <Image src={dev} alt="" />
            </div>
        </div>
   </div>
  )
}
