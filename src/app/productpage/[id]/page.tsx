"use client";
import Image from "next/image"
import cartlogo from "/public/Group.png"
import { useState , useEffect } from "react"
import { ProductI3 } from "../page";
import { GetFeaturedProducts, GetInstagramProducts, GetProductData } from "@/sanity/sanity.query";

interface ListInterface {
    name: string,
    price: string,
    image: string
}

interface ParamsInterface {
    id: number
}
interface DynamicListInterface {id:number; name: string, price: string, image: string, quantity:number }
interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  imageURL: string; // Adjust based on your actual Sanity schema response.
}

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
export default function Details({ params }: { params: { id: string } }) {
  const [productData, setProductData] = useState<Product | null>(null);
  const [featuredProductData , setfeaturedProductData] = useState<ProductInterface[]>([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productData = await GetProductData();
        const product = productData.find((data: ProductInterface) => String(data._id) === params.id);
        setProductData(product);

         
                  const featuredProducts: ProductInterface[] = await GetFeaturedProducts();      
                  setfeaturedProductData(featuredProducts);
            
          
    
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProductData();

  }, []);




    const dynamicList: DynamicListInterface[] = [
        { id: 1, name: "Library Stool Chair", price: "$50.00 USD", image: "/Image.png", quantity: 0 },
        { id: 2, name: "Library Stool Chair", price: "$20.00 USD", image: "/Images.png", quantity: 0 },
        { id: 3, name: "Library Stool Chair", price: "$81.00 USD", image: "/Image (1).png", quantity: 0 },
        { id: 4, name: "Library Stool Chair", price: "$49.00 USD", image: "/Image (2).png", quantity: 0 },
        { id: 5, name: "Library Stool Chair", price: "$30.00 USD", image: "/cateogary2.png", quantity: 0 },
        { id: 6, name: "Library Stool Chair", price: "$80.00 USD", image: "/images (1).png", quantity: 0 },
        { id: 7, name: "Library Stool Chair", price: "$90.00 USD", image: "/images (2).png", quantity: 0 },
        { id: 8, name: "Library Stool Chair", price: "$24.00 USD", image: "/Image.png", quantity: 0 },
        { id: 9, name: "Library Stool Chair", price: "$67.00 USD", image: "/cateogary1.png", quantity: 0 },
        { id: 10, name: "Library Stool Chair", price: "$20.00 USD", image: "/Images.png", quantity: 0 },
        { id: 11, name: "Library Stool Chair", price: "$32.00 USD", image: "/Image (1).png", quantity: 0 },
        { id: 12, name: "Library Stool Chair", price: "$40.00 USD", image: "/cateogary3.png", quantity: 0 }
      ];
      
    const listProducts: ListInterface[] = [
        { name: "Library Stool Chair", price: "$20", image: `/images (2).png` },
        { name: "Library Stool Chair", price: "$20", image: `/Image.png` },
        { name: "Library Stool Chair", price: "$20", image: `/cateogary3.png` },
        { name: "Library Stool Chair", price: "$20", image: `/Image (1).png` },
        { name: "Library Stool Chair", price: "$20", image: `/cateogary1.png` },

    ]

    // const dynamicProducts = dynamicList[params.id];


    return productData ? (
        <div>
            <section className="flex flex-col md:flex-row xl:gap-20 h-full md:gap-8 gap-10 items-center md:items-start justify-center py-8 md:py-12 pb-5 md:pt-5 lg:pt-16 md:pl-10">

<div><img src={productData.imageURL} alt={productData.title} height={607} width={675} className="xl:h-[607px] xl:w-[675px] lg:h-[300px] lg:w-[320px] h-[200px] w-[215px] md:h-[250px] md:w-[400px]"></img></div>
<div className="flex flex-col xl:gap-5 gap-3 pl-2">
    <h1 className="xl:text-[60px] lg:text-[35px] font-bold xl:w-[500px] text-[17px] md:text-[20px]">{productData.title}</h1>
    <div className="xl:h-[44px] xl:w-[144px] lg:h-[25px] lg:w-[100px] lg:text-[12px] h-[20px] w-[90px] text-[10px] rounded-full bg-color5 text-white flex items-center justify-center xl:text-[20px]">${productData.price} USD</div>
    <div className="h-[1px] xl:w-[521px] bg-color27 lg:w-[400px] w-[90%]"></div>
    <p className="xl:text-[22px] text-[12px] xl:h-[101px] lg:w-[400px] xl:w-[543px] text-color w-[80%]">{productData.description}</p>
    <button className="xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 flex items-center justify-center text-white xl:gap-3 md:gap-2 gap-1 text-[12px] lg:text-[17px]">
        <div><Image width={29} height={29} src={cartlogo} alt="cart logo" className="xl:h-[29px] xl:w-[29px] h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]"></Image></div>
        <p className="xl:text-[22px]">Add To cart</p>
    </button>
</div>

</section>
           
           

           <section className="h-full bg-white flex flex-col py-8 md:py-12 gap-[8px] justify-center items-center  xl:px-10  px-6 ">
            <div className="flex justify-between items-center w-[100%] lg:px-28 xl:px-0">
                   <h1 className="xl:text-[28px] text-[16px] md:text-[22px] text-black font-bold">Featured Products</h1>
                   <div className=" border-b-[2px] border-black text-black xl:text-[18px] text-[12px] md:text-[14px] font-semibold xl:h-[31px] xl:w-[75px] flex justify-center items-center">View all</div>
                   </div>
                   <div>
                     <div className="grid md:grid-cols-4 grid-cols-2 gap-x-[25px] gap-y-[10px]">{featuredProductData.map((item) => (
                       <div  className="xl:h-[306px] xl:w-[263px] lg:w-[133px] flex flex-col xl:gap-[10px] gap-[5px] md:gap-[8px] text-color  ">           
                         <img className=" xl:h-[263px] xl:w-[263px] h-[110px] w-[110px] md:w-[140px] md:h-[140px]"width={312} height={312} src={item.imageURL} alt={item.title}></img>
                         <div className="flex justify-between items-center ">
                           <h3 className="xl:text-[16px] text-[10px] md:text-[12px] group-hover:text-color6 ">{item.title}</h3>
                           <h2 className="xl:text-[14px] text-[8px] md:text-[10px] font-bold">{item.price}</h2>
                         </div>
                         
                        
                          </div>
                        ))}</div>
                   </div>
                 </section>
        </div>
    ) : (
      <p>Product not found!!!</p>
    )
}