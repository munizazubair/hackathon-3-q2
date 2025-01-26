"use client";

import { GetProductData } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cartLogo from "/public/Buy 2.png";
import cartLogo2 from "/public/Add Cart.png";
import Header from "../../header";
import Footer from "../../footer";
import ImageBack from "/public/back.icon.png"
import { ProductInterface } from "@/app/(withHeader)/productpage/[id]/page";
export default function CategoriesDetails({ params }: { params: { id: string } }) {
  if (!params.id) {
    return <div>Invalid category.</div>;
  }

      const [productData , setProductData] = useState<ProductInterface[]>([]);
  
   useEffect(() => {
         
        async function fetchProductData() {
          const productData = await GetProductData();
          setProductData(productData);
             
        }
        fetchProductData();

      }, []);
      
  const filteredProducts = productData.filter(
    (products) => products.category && products.category._id === params.id
  );


return(
  <div>
    <Header />
    <div className="">
    <Link href={"/"}>
  <div className="flex items-center pl-3  md:pl-28">
  <div className="h-4 w-4">
 <Image src={ImageBack} alt="Back"></Image>
  </div>
  <div className="text-[14px] md:text-[20px] ">Back</div>
</div>
</Link>
<div className="flex justify-center">
                <section className=" h-full my-3 md:my-5 lg:w-[1000px] lg:h-[400px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col justify-around items-start  ">
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[20px] md:gap-x-[30px] lg:gap-x-7  gap-x-[25px] gap-y-[10px] mx-6 ">
            {filteredProducts.map((item) => (
                      <Link href={`/productpage/${item._id}`}>

            <div  className="group lg:h-[377px] xl:w-[312px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px] text-color relative ">

  {item.badge === "New" ? <div className="lg:h-[26px] lg:w-[54px] w-[42px] h-[18px] md:w-[49px] md:h-[22px] rounded-[4px] bg-color7 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.badge} </div> : ""}
  {item.badge === "Sales" ? <div className="lg:h-[26px] lg:w-[49px] w-[47px] h-[18px] md:w-[54px] md:h-[22px] rounded-[4px] bg-color8 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute  lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.badge} </div> : ""}

              <img className="lg:h-[312px] lg:w-[312px] lg:text-[16px] text-[12px] md:text-[14px]"width={312} height={312} src={item.imageURL} alt={item.title}></img>
              <div className="flex justify-between items-center  ">
              <div className="flex flex-col lg:gap-[10px] ">
                <h3 className="lg:text-[16px] text-[12px] md:text-[14px] group-hover:text-color6 ">{item.title}</h3>
                <div className="flex justify-start items-center gap-[4px]">
                <h2 className="lg:text-[18px] text-[14px] md:text-[16px] font-bold">${item.price}</h2>
                <h2><div className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">{item.priceWithoutDiscount}</div></h2>
                </div>
              </div>
              
              <div className="lg:h-[44px] lg:w-[44px] h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px]  hidden group-hover:flex justify-center items-center lg:rounded-[4px] bg-color5 ">
                
                <Image className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]" src={cartLogo} alt={item.title} width={19} height={19} ></Image></div>
                <div className="bg-color3 lg:h-[44px] lg:w-[44px]  h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px] flex group-hover:hidden justify-center items-center lg:rounded-[4px]  ">
                <Image className="h-[25px] w-[25px]  md:h-[40px] md:w-[40px]" src={cartLogo2} alt={item.title} width={220} height={220} ></Image> 
                </div>
              </div>
               </div>
               </Link>))}</div>
        </div>
      </section>
      </div>
               <Footer />
  </div>
  </div>
)
}
