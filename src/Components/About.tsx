import React from 'react'
import about from "../../public/about.png"
import Image from 'next/image'
import dev from "../../public/dev.webp"

export default function About() {
  return (
   <div>
        <div className='text-center mt-5'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>About me 👋</p>
        </div>
        <div className='grid grid-cols-12 gap-1 place-content-center mt-11'>
            <div className='col-start-1 col-end-8 ml-11'>
                <p className='font-mono text-[16px]'>Hi, I am SABARISHKUMAR an undergraduate majoring in B.E.(Electronics and Communication),A self-taught Full-stack Web developer,React Native developer and Restful-Api developer, Intrested to work in a Challenging environment and looking forward to obtain a position of responsibilities that enrich my skills and experience and keen to work in an environment where I can enhance my knowledge.</p>
                <p className='mt-3'></p>
                <p className='font-mono text-[16px]'>
                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
                </p>
                <p className='mt-3'></p>
                <p className='font-mono text-[16px]'>
                My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                </p>
            </div>
            <div className='col-start-9 col-end-12'>
                <Image src={dev} alt="" />
            </div>
        </div>
   </div>
  )
}
