import ImageGallary from '@/app/components/ImageGallary';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function getData(slug : string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]
    {
      _id,
        image,
        price,
        name,
        description,
        "slug" : slug.current,
        "categoryName" : category->name
      
    }`;
    const data = await client.fetch(query);
    console.log(data);
    console.log("in fun");
    return data;
}

export default async function ProductPage(
    {
        params,
    } : {
        params: {slug : string};
    }
) {

    const data : fullProduct = await getData(params.slug);

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
                            <Link
                            href ="/ethenic" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                                XS
                            </Link>
                            <Link 
                            href ="/casual" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            S
                            </Link>
                            <Link 
                            href ="/indo-western" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            M
                            </Link>
                            <Link 
                            href ="/night-wear" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            L
                            </Link>
                            <Link 
                            href ="/night-wear" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            XL
                            </Link>
                            <Link 
                            href ="/night-wear" 
                            className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'> 
                            XXL
                            </Link>
                            </div>
                        </div>

                        <div className='flex gap-2.5 mt-8'>
                            <Button>Add to Cart</Button>
                            <Button variant={"secondary"}>Checkout</Button>
                        </div>

                        <p className='mt-12'>{data.description}</p>


                    </div>
                
                </div>
            </div>
        </div>
        </div>
        
    )
}
