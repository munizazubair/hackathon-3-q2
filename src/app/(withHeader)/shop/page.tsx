"use client";
import Link from "next/link";
import Image from "next/image";
import { useState , useEffect } from "react";
import { GetProductData } from "@/sanity/sanity.query";
import cartLogo from "/public/Buy 2.png";
import cartLogo2 from "/public/Add Cart.png";


interface ProductInterface {
  _id:number,
  title :string,
  price :number,
  priceWithoutDiscount : number ,
  badge:string,
  imageURL:string,
  products: number,
  description:string,
  inventory:number,
  tags:string
}
export default function Shop() {

    const [productData , setProductData] = useState<ProductInterface[]>([]);
    const [isLoading , setIsLoading] = useState<boolean>(true);

    useEffect(() => {
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
                const [searchTerm, setSearchTerm] = useState(""); 
                const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]); 
              
             
                useEffect(() => {
                  const results = productData.filter((product:ProductInterface) =>
                      (product.title || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
                  (product.description || "").toLowerCase().includes(searchTerm.toLowerCase()) 
                  );
                  setFilteredProducts(results);
                }, [searchTerm, productData]);
    return(
       <div>
        <div className=" h-[35px] flex items-center justify-end md:pr-16 pr-4 xl:pr-32">

                   <div className="flex items-center  ">
         <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border-[1px] md:border-[2px] border-color15 focus:outline-none pl-2 h-[22px] w-[150px] md:h-[32px] md:w-[220px] xl:w-[240px] lg:h-[38px] text-[12px] md:text-[16px] "
      />
      <div className="h-[22px] w-[22px] md:h-[32px] md:w-[32px] lg:h-[38px] lg:w-[38px] xl:w-[38px] xl:h-[38px] bg-color6 flex items-center justify-center">
      <svg className="lg:h-[20px] lg:w-[20px] md:h-[22px] md:w-[22px]" width="16" height="16" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.6773 56.3728L49.3199 45.0987C53.7285 39.5976 55.8634 32.6153 55.2858 25.5873C54.7081 18.5594 51.4618 12.02 46.2143 7.31382C40.9667 2.60766 34.1169 0.0924338 27.0731 0.285321C20.0294 0.478209 13.3273 3.36455 8.34475 8.35085C3.36224 13.3372 0.478085 20.0444 0.285344 27.0935C0.0926029 34.1425 2.60592 40.9976 7.30851 46.2491C12.0111 51.5006 18.5455 54.7495 25.5681 55.3276C32.5908 55.9056 39.5678 53.7691 45.0647 49.3571L56.3303 60.6313C56.6149 60.9184 56.9534 61.1463 57.3265 61.3019C57.6995 61.4574 58.0997 61.5375 58.5038 61.5375C58.9079 61.5375 59.3081 61.4574 59.6811 61.3019C60.0542 61.1463 60.3927 60.9184 60.6773 60.6313C61.2291 60.06 61.5375 59.2966 61.5375 58.5021C61.5375 57.7075 61.2291 56.9441 60.6773 56.3728ZM27.8908 49.3571C23.6525 49.3571 19.5094 48.0994 15.9854 45.7429C12.4614 43.3865 9.71473 40.0371 8.09281 36.1185C6.47089 32.1999 6.04652 27.8879 6.87337 23.7279C7.70022 19.5679 9.74115 15.7467 12.7381 12.7475C15.735 9.74831 19.5533 7.70583 23.7101 6.87835C27.867 6.05088 32.1757 6.47557 36.0913 8.09872C40.007 9.72187 43.3538 12.4706 45.7084 15.9973C48.0631 19.5239 49.3199 23.6702 49.3199 27.9117C49.3199 33.5994 47.0622 39.0541 43.0434 43.0759C39.0247 47.0977 33.5741 49.3571 27.8908 49.3571Z" fill="white"/>
</svg>
</div>
</div>
 </div>
      {/* Display Products */}
      <div className="flex flex-col lg:gap-[30px] gap-[10px] items-center w-full bg-white">
            <section className=" h-full my-3 md:my-5 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col justify-around items-start gap-6 ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold lg:pb-5">Shop the Products Here</h1>
        {isLoading ? (
        <p className="md:text-xl py-5">Loading...</p>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[20px]  gap-x-[25px] gap-y-[10px]">
        {filteredProducts.map((product) => (
            <Link href={`/productpage/${product._id}`}>
                     

            <div  className="group lg:h-[377px] xl:w-[312px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px] text-color relative ">

  {product.badge === "New" ? <div className="lg:h-[26px] lg:w-[54px] w-[42px] h-[18px] md:w-[49px] md:h-[22px] rounded-[4px] bg-color7 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {product.badge} </div> : ""}
  {product.badge === "Sales" ? <div className="lg:h-[26px] lg:w-[49px] w-[47px] h-[18px] md:w-[54px] md:h-[22px] rounded-[4px] bg-color8 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute  lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {product.badge} </div> : ""}

              <img className="lg:h-[312px] lg:w-[312px] lg:text-[16px] text-[12px] md:text-[14px]"width={312} height={312} src={product.imageURL} alt={product.title}></img>
              <div className="flex justify-between items-center ">
              <div className="flex flex-col lg:gap-[10px]">
                <h3 className="lg:text-[16px] text-[11px] md:text-[14px] group-hover:text-color6 ">{product.title}</h3>
                <div className="flex justify-start items-center gap-[4px]">
                <h2 className="lg:text-[18px] text-[12px] md:text-[16px] font-bold">${product.price}</h2>
                <h2><div className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">{product.priceWithoutDiscount}</div></h2>
                </div>
              </div>
              
              <div className="lg:h-[44px] lg:w-[44px] h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px]  hidden group-hover:flex justify-center items-center lg:rounded-[4px] bg-color5 ">
                
                <Image className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]" src={cartLogo} alt={product.title} width={19} height={19} ></Image></div>
                <div className="bg-color3 lg:h-[44px] lg:w-[44px]  h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px] flex group-hover:hidden justify-center items-center lg:rounded-[4px]  ">
                <Image className="h-[25px] w-[25px]  md:h-[40px] md:w-[40px]" src={cartLogo2} alt={product.title} width={220} height={220} ></Image> 
                </div>
              </div>
               </div>
              
               </Link>
        ))
      }
      </div>
      )}
      </section>

    
       
        
      </div>
  
         
       </div>
    )
}