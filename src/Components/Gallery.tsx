import React from 'react'
import PhotoAlbum from "react-photo-album";

export default function Gallery() {
    
    const photos = [
        {
            src: "https://media.licdn.com/dms/image/C5622AQFvZcuk0xnXTQ/feedshare-shrink_1280/0/1676908375649?e=1699488000&v=beta&t=fERWXAEy1HjYTp0IX5lb3ilBp1HLFcdzk7-TGRPqK_4",
            width: 800,
            height: 600
        },
        {
            src: "https://images.credly.com/size/680x680/images/412aaa80-56ba-4180-ad89-32427a644e95/Data_Engineering_Essentials.png",
            width: 800,
            height: 600
        },
        {
            src: "https://media.licdn.com/dms/image/sync/C5627AQF7y5x-Eu9F0w/articleshare-shrink_800/0/1696012876361?e=1697353200&v=beta&t=VHzPX8CW3NGS0S8qw0ODC_uwhFk8QdgKaQp_LDIgUGs",
            width: 800,
            height: 600
        }
    ];
    
  return (
    <div>
         <div className='text-center mt-10'>
            <p className='text-[55px] font-bold animate-fade-right animate-delay-[100ms] animate-ease-in'>My Gallery 👋</p>
        </div>
        <div className='mt-7'>
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    </div>
  )
}
