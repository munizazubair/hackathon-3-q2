"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import EmailInput from "@/components/email-input";
import { GetInstagramProducts, GetProductData } from "@/sanity/sanity.query";
import cartLogo from "/public/Buy 2.png";
import cartLogo2 from "/public/Add Cart.png";


interface ProductInterface {
  _id: number,
  title: string,
  price: number,
  priceWithoutDiscount: number,
  badge: string,
  imageURL: string,
  products: number,
  description: string,
  inventory: number,
  tags: string,
  category: string
}
export default function Product() {

  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [instagramProductData, setInstagramProductData] = useState<ProductInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {

    async function fetchInstagramData() {
      const instagramProductData = await GetInstagramProducts();
      setInstagramProductData(instagramProductData);
    }
    fetchInstagramData();

    async function fetchProductData() {
      setIsLoading(true);
      try {
        const productData = await GetProductData();
        setProductData(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductData();

  }, []);





  return (
    <div className="flex flex-col lg:gap-[30px] gap-[10px] items-center w-full bg-white">
      <section className=" h-full my-3 md:my-5 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col justify-around items-start  ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold lg:pb-5">Our Products</h1>
        <div>{isLoading ? (
          <p className="md:text-xl py-5">Loading...</p>
        ) : (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[20px]  gap-x-[25px] gap-y-[10px]">
            {productData.map((item) => (
              <Link href={`/productpage/${item._id}`}>

                <div className="group lg:h-[377px] xl:w-[312px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px] text-color relative ">

                  {item.badge === "New" ? <div className="lg:h-[26px] lg:w-[54px] w-[42px] h-[18px] md:w-[49px] md:h-[22px] rounded-[4px] bg-color7 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.badge} </div> : ""}
                  {item.badge === "Sales" ? <div className="lg:h-[26px] lg:w-[49px] w-[47px] h-[18px] md:w-[54px] md:h-[22px] rounded-[4px] bg-color8 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute  lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.badge} </div> : ""}

                  <img className="lg:h-[312px] lg:w-[312px] lg:text-[16px] text-[12px] md:text-[14px]" width={312} height={312} src={item.imageURL} alt={item.title}></img>
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col lg:gap-[10px]">
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
        )}
        </div>
      </section>

      <section className="w-full h-full lg:py-14 py-8 md:py-10 flex flex-col justify-center items-center lg:gap-[70px] gap-[30px] md:gap-[50px] bg-color17">
        <div className="lg:h-[165px] lg:w-[760px] flex flex-col items-center justify-center lg:gap-[70px] gap-[30px] md:gap-[50px]">
          <h1 className="xl:text-[50px] lg:text-[35px] text-[18px] md:text-[28px] text-black font-semibold">Or Subscribe To The Newsletter</h1>
          <EmailInput />
        </div>
        <div className="lg:h-[319px] xl:w-[1321px] ">
          <div className="lg:h-[319px] lg:w-[900px] xl:w-[1321px] flex flex-col justify-center items-center lg:gap-[70px] gap-[30px] md:gap-[50px] px-2 lg:p-0">
            <h1 className="xl:text-[50px] lg:text-[35px] text-[18px] md:text-[28px] text-black font-semibold text-center">Follow Products And Discounts On Instagram</h1>
            {isLoading ? (
              <p className="md:text-xl py-5">Loading...</p>
            ) : (
              <div className="grid lg:grid-cols-6 grid-cols-2 md:grid-cols-3 lg:gap-x-[20px] gap-3">
                {instagramProductData.map((item) => (<div><Link href={`/productpage/${item._id}`}><img className="h-[150px] w-[150px]" src={item.imageURL} alt="image" width={186} height={186}></img></Link></div>))}
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}