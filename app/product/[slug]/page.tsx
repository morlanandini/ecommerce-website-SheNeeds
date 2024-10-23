import AddtoCart from '@/app/components/AddtoCart';
import Checkout from '@/app/components/Checkout';
import ImageGallary from '@/app/components/ImageGallary';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'


async function getData(slug : string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]
    {
      _id,
        image,
        price,
        name,
        description,
        "slug" : slug.current,
        "categoryName" : category->name,
        price_id
      
    }`;
    const data = await client.fetch(query);
    // console.log(data);
    // console.log("in fun"+ data.size);
    // console.log(data.price_id +" what is prize id of item")

    return data;
}

export default async function ProductPage(
    {
        params,
    } : {
        params: {slug : string};
    }
) {

    // const handleSizeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     // Remove the active class from all buttons
    //     const buttons = document.querySelectorAll('.size-button');
    //     buttons.forEach(button => {
    //         button.classList.remove('bg-gray-200');
    //     });

    //     // Add the active class to the clicked button
    //     event.currentTarget.classList.add('bg-gray-200');
    // };

    const data : fullProduct = await getData(params.slug);
    data.size = "XL"

        return (

        <div className='bg-white'>

            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>


                <div className='grid gap-8 md:grid-cols-2'>
                    <ImageGallary images={data.image}></ImageGallary>

                    <div className='md:py-8'>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block text-gray-500'>
                                {data.categoryName}
                            </span>
                            <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                                {data.name}
                            </h2>
                        </div>

                        <div className='mb-6 flex items-center gap-3 md:mb-100'>
                            <Button className='rounded-full gap-x-2'>
                                <span className='text-sm'>4.2</span>
                                <Star className = "h-5 w-5" />
                                <Star className = "h-5 w-5" />
                                <Star className = "h-5 w-5" />
                                <Star className = "h-5 w-5" />
                            </Button>
                            <span className='text-sm text-gray-500 transition duration-100'>
                                56 Ratings
                            </span>
                        </div>

                        <div className='mb-4'>
                            <div className='flex items-end gap-2'>
                                <span className='text-xl font-bold text-grat-800 md:text-2xl'>
                                    ${data.price}
                                </span>
                            </div>
                        </div>
                        <span className='mb-4 flex items-center gap-2 text-gray-500'>
                            <Truck></Truck>
                            get delivered within a week
                        </span>
                        <div>
                            <span className='text-sm text-gray-500 transition duration-100'>
                                Select Size
                            </span>
                            <span className='text-sm text-gray-500 transition duration-100'>
                                <Link href={"/"}> Size Chart</Link>
                            </span>
                            <br />
                            <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                            <div className='flex h-12 w-full divide-x overflow-hidden rounded-lg border'>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                            XS
                            </button>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            S
                            </button>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            M
                            </button>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            L
                            </button>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            XL
                            </button>
                            <button 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            XXL
                            </button>
                            </div>
                        </div>

                        <div className='flex gap-2.5 mt-8'>
                        <AddtoCart currency="USD" description={data.description} 
                        name={data.name} price={data.price} image={data.image[0]}  size={data.size} price_id ={data.price_id} ></AddtoCart>
                        <Checkout currency="USD" description={data.description} 
                        name={data.name} price={data.price} image={data.image[0]}  size={data.size} price_id ={data.price_id} ></Checkout>
                        {/* <Button variant={"secondary"}>Checkout</Button> */}
                        </div>

                        <p className='mt-12'>{data.description}</p>


                    </div>
                
                </div>
            </div>
        </div>
        </div>
        
    )
}
