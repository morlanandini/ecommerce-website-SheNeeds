import React from 'react'
import { simplifiedProduct } from '../interface';
import { client } from '../lib/sanity';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
    const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug" : slug.current,
          "categoryName" : category->name,
         "imageUrl": image[0].asset->url
      }`;

      const data = await client.fetch(query);
      return data;
}

export const Newest = async () => {
    const data : simplifiedProduct[] = await getData();
  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Our Newest Products</h2>

            <Link href='/all' className='text-primary font-bold flex items-center gap-x-1 '> See All
            <span>
              <ArrowRight></ArrowRight>
            </span>
            </Link>
            </div>

            <div className='mt-6 grid grid-cols gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 cl:gap-x-8'>
              {data.map((product) => (
                <div key={product._id} className="group relative">
                  <div className='aspect-square w-full overflow-hidden roundedmd bg-gray-200 group-hover:opacity-75 lg:h-80'>
                  <Link href={`/product/${product.slug}`}>
                  <Image
                    src = {product.imageUrl}
                    alt = "img"
                    width = {300}
                    height = {300}
                    >
                    </Image>
                  </Link>
                    
                  </div>

                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <Link href={`/product/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>

                    </div>
                  </div>

                </div>
              ))}
            </div>
        </div>
    </div>
  )
}
