"use client";

import Image from "next/image";
import Link from "next/link";
import sideImage from "/public/Product Image.png"
import logo from "/public/Logo.png";
import logo1 from "/public/Logo (1).png"
import logo2 from "/public/Logo (2).png"
import logo3 from "/public/Logo (3).png"
import logo4 from "/public/Logo (4).png"
import logo5 from "/public/Logo (5).png"
import logo6 from "/public/Logo (6).png"
import leftImage from "/public/Image (1).png"
import cartLogo from "/public/Buy 2.png"
import cartLogo2 from "/public/Add Cart.png"
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { GetCategoriesData, GetCategoryWithProductsData, GetFeaturedProducts, GetGalleryProducts, GetProductData2 } from "@/sanity/sanity.query";
import Categories from "./components/categories/page";

interface Category {
  _id: number,
  title:string
}
interface ProductInterface {
  _id:number,
  title :string,
  price :number,
  priceWithoutDiscount : number ,
  badge:string,
  imageURL:string,
  category:Category,
  products: number,
  description:string,
  inventory:number,
  tags:string
}

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(false); 
  const [categoryData, setCategoryData] = useState<ProductInterface[]>([]);
  const [productData2, setProductData2] = useState<ProductInterface[]>([]);
  const [featuredProducts, setFeaturedProoducts] = useState<ProductInterface[]>([]);
  const [galleryProducts, setGalleryProducts] = useState<ProductInterface[]>([]);
  const [categoryFInd, setCategoryFind] = useState<ProductInterface[]>([]);
  const categoryId = "";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); 
      try {
        const categoryData = await GetCategoriesData();
        setCategoryData(categoryData);

        const featuredProducts = await GetFeaturedProducts();
        setFeaturedProoducts(featuredProducts);

        const galleryProducts = await GetGalleryProducts();
        setGalleryProducts(galleryProducts);

        const productData2 = await GetProductData2();
        setProductData2(productData2);

        const categoryDataWithProducts = await GetCategoryWithProductsData(categoryId);
        setCategoryFind(categoryDataWithProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);



  return (
    <>
      <Header />
      <div className="h-full pb-4 xl:h-[3800px] 2xl:h-[3800px] flex flex-col lg:gap-[30px] gap-[10px] items-center w-full bg-white">
        {/* section 1 */}
        <section className="xl:h-[850px] lg:h-[500px] h-[580px] md:h-[400px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-color3 flex flex-col sm:flex-row justify-around items-center lg:rounded-b-[48px] rounded-b-[20px] md:rounded-b-[30px] lg:gap-[10px] gap-[px] md:gap-[7px] ">
          <div className="xl:h-[337px] xl:w-[557px] lg:h-[300px] lg:w-[480px] md:w-[350px] mx-5 flex flex-col lg:gap-[10px] gap-[6px] md:gap-[8px]  ">
            <p className="lg:text-[14px] text-[16px] md:text-[12px] text-color">Welcome to chairy</p>
            <h1 className="xl:text-[60px] lg:text-[50px] text-[26px] sm:text-[30px] md:text-[33px]  text-color font-bold xl:leading-[66px] lg:leading-[53px] leading-[34px] md:leading-[33px]">Best Furniture Collection for your interior.</h1>
            <Link href={"/shop"}>
              <button className="lg:h-[52px] h-[42px] md:h-[40px] lg:w-[171px] w-[140px] md:w-[130px] lg:mt-[25px] mt-[10px] md:mt-[18px] bg-color5 rounded-[8px] text-white flex justify-center items-center lg:gap-[20px] gap-[12px] md:gap-[15px] lg:text-[16px] text-[16px] md:text-[14px]">
                <p>Shop Now</p>
                <div><svg className="lg:h-[24px] lg:w-[24px] h-[18px] w-[18px] md:h-[20px] md:w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
              </button>
            </Link>
          </div>
          <div><Image className="xl:h-[584px] lg:h-[400px] h-[300px] md:h-[304px] xl:w-[434px] lg:w-[300px] w-[230px] md:w-[220px]" src={sideImage} alt="side image of the main page "></Image></div>
        </section>
        
   {/* section 2 */}
        <section className="xl:h-[139px] lg:h-[120px] h-[70px] md:h-[130px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white grid grid-cols-7 gap-2 justify-around items-center  ">
          <div className="flex justify-center items-center"><Image className="lg:h-[87px] lg:w-[85px] h-[25px] w-[28px] md:h-[40px] md:w-[38px]" src={logo} alt="logo"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[109px] lg:w-[107px]  h-[40px] w-[48px] md:h-[65px] md:w-[63px]" src={logo1} alt="logo1"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[139px] lg:w-[135px] h-[50px] w-[65px] md:h-[100px] md:w-[98px]" src={logo2} alt="logo2"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[65px] lg:w-[63px] h-[15px] w-[18px] md:h-[30px] md:w-[28px]" src={logo3} alt="logo3"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[98px] lg:w-[101px] h-[35px] w-[48px] md:h-[36px] md:w-[59px]" src={logo4} alt="logo4"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[113px] lg:w-[115px] h-[40px] w-[53px] md:h-[70px] md:w-[68px]" src={logo5} alt="logo5"></Image></div>
          <div className="flex justify-center items-center"><Image className="lg:h-[84px] lg:w-[87px] h-[30px] w-[33px] md:h-[43px] md:w-[40px]" src={logo6} alt="logo6"></Image></div>
        </section>

        {/* section 3 */}

        <section className="h-auto lg:py-5 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col gap-[20px] justify-around items-start no-gap">
          <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold">Featured Products</h1>
          <div>
          {isLoading ? (
        <p className="md:text-xl py-5">Loading...</p> 
      ) : (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-[25px] gap-y-[10px] no-gap">
              {featuredProducts.map((item) => (
                <Link  href={`/productpage/${item._id}`}>
                <div
                  key={item._id}
                  className="group xl:w-[312px] flex flex-col gap-[5px] text-color relative no-gap"
                >
                      {/* Badge */}
                      {item.badge && (
                    <div
                      className={`lg:h-[24px] lg:w-[50px] w-[40px] h-[16px] md:w-[46px] md:h-[20px] rounded-[4px] flex justify-center items-center lg:text-[12px] text-[8px] md:text-[10px] absolute lg:top-[10px] top-[5px] left-[5px] ${item.badge === "New" ? "bg-color7" : "bg-color8"
                        } text-white`}
                    >
                      {item.badge}
                    </div>
                  )}

                  {/* Image */}
                  <img
                    className="lg:h-[312px] lg:w-[312px] text-[12px] md:text-[14px]"
                    width={312}
                    height={312}
                    src={item.imageURL}
                    alt={item.title}
                  />

                  {/* Product Details */}
                  <div className="flex justify-between items-center no-gap">
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="lg:text-[16px] text-[11px] md:text-[14px] group-hover:text-color6">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-[4px] lg:gap-[10px]">
                        <h2 className="lg:text-[18px] text-[12px] md:text-[16px] font-bold">
                          {item.price}
                        </h2>
                        {item.priceWithoutDiscount && (
                          <h2 className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">
                            {item.priceWithoutDiscount}
                          </h2>
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        className="lg:h-[40px] lg:w-[40px] h-[24px] w-[24px] md:h-[36px] md:w-[36px] rounded-[2px] hidden group-hover:flex justify-center items-center bg-color5"
                      >
                        <Image
                          className="h-[12px] w-[12px] md:h-[20px] md:w-[20px]"
                          src={cartLogo}
                          alt={item.title}
                          width={16}
                          height={16}
                        ></Image>
                      </button>
                      <button className="bg-color3 lg:h-[40px] lg:w-[40px] h-[24px] w-[24px] md:h-[36px] md:w-[36px] rounded-[2px] flex group-hover:hidden justify-center items-center">
                        <Image
                          className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                          src={cartLogo2}
                          alt={item.title}
                          width={30}
                          height={30}
                        ></Image>
                      </button>
                    </div>
                  </div>
                  
                </div>
                </Link>
              ))}
              
            </div>
      )}
          </div>
        </section>


        {/* section 4 */}
       <Categories />
       
        {/* section 5 */}
        <section className="lg:h-auto sm:h-auto h-auto pt-20 lg:pt-10 md:pt-16 lg:w-[90%] xl:w-[1341px] w-[95%] bg-white flex flex-col xl:flex-row lg:gap-[20px] gap-[20px] justify-around items-center lg:hidden">
          <p className="xl:-rotate-90 xl:text-[36px] lg:text-[32px] text-[24px] md:text-[28px] xl:w-[600px] xl:h-[90px] font-semibold text-center lg:text-left">
            EXPLORE NEW AND POPULAR STYLES
          </p>

          <div>
            <Image
              className="md:h-[400px] md:w-[400px] lg:w-[500px] lg:h-[500px] xl:p-0"
              src={leftImage}
              alt="Left side image"
              width={648}
              height={648}
            />
          </div>
          {isLoading ? (
        <p>Loading...</p> // Show loading indicator
      ) : (
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-[15px] lg:gap-[20px]">
            {galleryProducts.map((product: ProductInterface) => (
              <div className="flex justify-center items-center flex-col gap-4">
                <div>
                <img
                  className="h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:w-[250px] lg:h-[250px] object-cover rounded-lg shadow-sm"
                  src={product.imageURL}
                  alt="image"
                  width={312}
                  height={312}
                />

                </div>
              </div>
            ))}
          </div>
      )}
        </section>

        {/* section 6 */}
       
        <section className="h-full py-8 gap-4 lg:gap-2 lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col justify-center items-center">
          <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold lg:pb-3 pb-2">Our Products</h1>
          <div>
          {isLoading ? (
        <p>Loading...</p> // Show loading indicator
      ) : (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[35px] gap-x-[20px] gap-y-[8px]">
              {productData2.map((item: ProductInterface) => (
                 <Link  href={`/productpage/${item._id}`}>
                <div
                 className="group lg:h-[350px] xl:w-[300px] flex flex-col gap-[8px] text-color relative"
                >
                  {item.badge && (
                    <div
                      className={`lg:h-[24px] lg:w-[50px] w-[40px] h-[16px] md:w-[46px] md:h-[20px] rounded-[4px] flex justify-center items-center lg:text-[12px] text-[8px] md:text-[10px] absolute lg:top-[10px] top-[5px] left-[5px] ${item.badge === "New" ? "bg-color7" : "bg-color8"
                        } text-white`}
                    >
                      {item.badge}
                    </div>
                  )}

                  <img
                    className="lg:h-[300px] lg:w-[300px] text-[12px] md:text-[14px]"
                    width={300}
                    height={300}
                    src={item.imageURL}
                    alt={item.title}
                  ></img>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[3px]">
                      <h3 className="lg:text-[16px] text-[11px] md:text-[14px] group-hover:text-color6">{item.title}</h3>
                      <div className="flex items-center gap-[4px]">
                        <h2 className="lg:text-[18px] text-[12px] md:text-[16px] font-bold">{item.price}</h2>
                        
                          <div className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">
                            {item.priceWithoutDiscount}
                          </div>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        className="lg:h-[40px] lg:w-[40px] h-[24px] w-[24px] md:h-[36px] md:w-[36px] rounded-[2px] hidden group-hover:flex justify-center items-center bg-color5"
                      >
                        <Image
                          className="h-[12px] w-[12px] md:h-[20px] md:w-[20px]"
                          src={cartLogo}
                          alt={item.title}
                          width={16}
                          height={16}
                        ></Image>
                      </button>
                      <button className="bg-color3 lg:h-[40px] lg:w-[40px] h-[24px] w-[24px] md:h-[36px] md:w-[36px] rounded-[2px] flex group-hover:hidden justify-center items-center">
                        <Image
                          className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                          src={cartLogo2}
                          alt={item.title}
                          width={30}
                          height={30}
                        ></Image>
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            
            </div>
      )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    