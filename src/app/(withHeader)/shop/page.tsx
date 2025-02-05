"use client";
import Link from "next/link";
import Image from "next/image";
import { useState , useEffect } from "react";
import { GetProductData } from "@/sanity/sanity.query";
import cartLogo from "/public/Buy 2.png";
import cartLogo2 from "/public/Add Cart.png";
import { ProductInterface } from "../productpage/[id]/page";



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
      const results = productData.filter((product: ProductInterface) => {
        const isSearchMatch =
          (product.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.description || "").toLowerCase().includes(searchTerm.toLowerCase());
        
        return isSearchMatch ;
      });
      setFilteredProducts(results);
    }, [searchTerm, productData]);
  
    return(
       <div>
       

<div className=" h-full my-2 flex items-center justify-end 2xl:mr-24 md:pr-16 pr-4 xl:pr-32 ">

<div className="flex items-center  ">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-[1px] md:border-[2px] border-color15 focus:outline-none pl-2 h-[22px] w-[150px] md:h-[32px] md:w-[220px] xl:w-[240px] lg:h-[38px] text-[12px] md:text-[16px] "
            />
        </div>
      
      </div>

   
      {/* Display Products */}
      <div className="flex flex-col lg:gap-[30px] gap-[10px] items-center justify-center w-full bg-white ">
            <section className=" h-full my-3 md:my-5 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col justify-around items-start gap-6 ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold lg:pb-5">Shop the Products Here</h1>
        {isLoading ? (
        <p className="md:text-xl py-5">Loading...</p>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[20px]  gap-x-[15px] gap-y-[10px] place-items-center">
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