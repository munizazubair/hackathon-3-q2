"use client";
import { ProductInterface } from '@/app/(with-header)/productpage/[id]/page';
import { GetCategoriesData } from '@/sanity/sanity.query';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Categories() {
      const [categoryData, setCategoryData] = useState<ProductInterface[]>([]);
      const [isLoading , setIsLoading] = useState<boolean>(true);

      useEffect(() => {
        async function fetchCategoryData() {
          setIsLoading(true); 
          try {
            const categoryData: ProductInterface[] = await GetCategoriesData(); 
            setCategoryData(categoryData); 
          } catch (error) {
            console.error("Error fetching category data:", error); 
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchCategoryData();
      }, []);

  return (
    <div>
         <section className="h-full pt-20 lg:pt-0 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col gap-[18px] lg:gap-[30px] md:gap-[25px] justify-around items-start  ">
          <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold">Top categories</h1>
          {isLoading ? (
        <p className='md:text-xl py-5'>Loading...</p>
      ) : (
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[25px] md:gap-x-[35px] md:gap-y-[30px] gap-y-[20px]">

          {categoryData.map((data) => (
          <div> <Link href={`./components/categories/${data._id}`}>
              <div className="lg:h-[300px] lg:w-[300px] h-[280px] w-[280px] md:h-[300px] md:w-[300px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px]  relative rounded-[10px] ">
                <img className="h-[280px] w-[280px] md:h-[300px] md:w-[300px] " src={data.imageURL} alt={data.title} width={424} height={424}></img>
                <div className="absolute bottom-0 bg-color10 lg:h-[85px] h-[60px]  w-[280px] md:h-[80px] md:w-[300px]   rounded-b-[10px] text-white flex flex-col justify-center items-start lg:gap-[8px] gap-[4px] md:gap-[6px] lg:pl-[22px] pl-[12px] md:pl-[18px]">
                  <h1 className="lg:text-[20px] text-[16px] md:text-[18px]">{data.title}</h1>
                  <h3 className="lg:text-[14px] text-[10px] md:text-[12px] opacity-[70%] hover:underline">{data.products} Products</h3>
                </div>

             </div>

          </Link>
          </div>
             ))}
              </div>
      )}
        </section>

    </div>
  )
}
