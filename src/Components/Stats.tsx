import React from 'react'

export default function Stats() {
  return (
    <div>
        <div className='flex flex-wrap mt-[150px] justify-evenly'>
            <div className='h-[200px] w-[240px]'>
                <div className='mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 48 48" className='m-auto'><path fill="none" stroke="green" strokeLinecap="round" strokeLinejoin="round" d="M42.79 12.72L21.55 41.78L3.79 28.79l4.87-6.66l11.1 8.12l16.37-22.4l3.312 2.45l.342.223l-19.167 25.533l-11.687-8.43"/></svg>
                </div>
                <p className='text-center mt-2 font-bold text-2xl'>Projects</p>
                <p className='m-2 font-mono'>Over 200+ successfully completed projects</p>
            </div>
            <div className='h-[200px] w-[240px]'>
                <div className='mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 1920 1792" className='m-auto'><path fill="grey" d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353q6 0 43.5 21t97.5 42.5T384 597q67 0 133-23q-5 37-5 66q0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5t62-81t85.5-53.5T602 960q10 0 43 21.5t73 48t107 48t135 21.5t135-21.5t107-48t73-48t43-21.5q61 0 111.5 20t85.5 53.5t62 81t43 97.5t26.5 108.5t14 109t3.5 103.5zM640 256q0 106-75 181t-181 75t-181-75t-75-181t75-181T384 0t181 75t75 181zm704 384q0 159-112.5 271.5T960 1024T688.5 911.5T576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128q81-117 81-256q0-29-5-66q66 23 133 23q59 0 119-21.5t97.5-42.5t43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75t-181-75t-75-181t75-181t181-75t181 75t75 181z"/></svg>
                </div>
                <p className='text-center mt-2 font-bold text-2xl'>Clients</p>
                <p className='m-2 font-mono'>Over 50+ Happy Clients across the world!</p>
            </div>
            <div className='h-[200px] w-[240px]'>
                <div className='mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 1024 1024" className='m-auto'><path fill="green" d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/></svg>
                </div>
                <p className='text-center mt-2 font-bold text-2xl'>Code</p>
                <p className='m-2 font-mono'>Over 300+ successfully completed Challenges!</p>
            </div>
            <div className='h-[200px] w-[240px]'>
                <div className='mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" className='m-auto'><g fill="none"><path d="M0 0h24v24H0z"/><path fill="skyblue" d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12L16.44 8.818Z"/></g></svg>
                </div>
                <p className='text-center mt-2 font-bold text-2xl'>Contributions</p>
                <p className='m-2 font-mono'>Over 30+ Open-Source Contributions</p>
            </div>
        </div>
    </div>
  )
}
