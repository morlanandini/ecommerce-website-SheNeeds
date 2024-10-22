"use client"
import { useState } from 'react'
import { urlFor } from '../lib/sanity';
import  Image  from 'next/image'

interface iAppProps {
    images : any
}

export default function ImageGallary({images} : iAppProps) {

    const [bigImage, setImage] = useState(images[0]);

    const handleImageClick = (image: any) => {
        setImage(image);
    }

    return (
        <div className='grid gap-4 lg:grid-cols-5 '>
            <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
                {images.map((image:any, idx:any) => (
                    <div key = {idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image src = {urlFor(image).url()}
                        width = {200}
                        height = {200}
                        alt = "image"
                        className='h-full w-full object-contain cursor-pointer'
                        onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-3'>
                <Image 
                src = {urlFor(bigImage).url()}
                alt = "photo"
                width={400}
                height={300}
                />
            </div>
        </div>
    )

}
