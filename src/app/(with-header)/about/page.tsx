"use client";

import Image from "next/image"
import product from "/public/Image.png"
import logo from "/public/Delivery.png"
import logo2 from "/public/Checkmark--outline.png"
import logo3 from "/public/Purchase.png"
import logo4 from "/public/Sprout.png"
import img1 from "/public/img1.jpeg"
import img2 from "/public/Parent.png";
import img3 from "/public/Parent (1).png"

export default function About() {

    return(
        <div className="flex flex-col  items-center lg:py-[80px] lg:gap-[120px] gap-[35px] py-[20px] md:gap-[38px] md:py-[26px]">
            <div className="flex  lg:gap-[20px] md:gap-[12px] items-center gap-[8px]  px-5 ">
                <div className="lg:w-[672px] lg:h-[478px] md:h-[200px] md:w-[380px] w-[290px] h-[130px] bg-color21 flex flex-col items-start justify-around lg:pl-[60px]  rounded-[4px] lg:rounded-[8px] md:px-8 px-4">
                    <div className="lg:h-[161px] lg:w-[495px] flex flex-col lg:gap-[12px] gap-[6px] ">
                        <h1 className="text-white lg:text-[32px] md:text-[20px] text-[12px]">About Us - Comforty</h1>
                        <p className="lg:text-[18px] text-[7px] md:text-[12px] text-white leading-[10px] md:leading-[16px] lg:leading-[21px] ">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                    </div>
                    <button className="lg:h-[56px] lg:w-[179px] md:h-[32px] md:w-[110px] h-[16px] w-[65px] flex justify-center items-center lg:text-[16px] text-[6px] md:text-[12px] bg-color22 text-white rounded-[4px]">View collection</button>
                </div>
                <div>
                <Image className="lg:w-[602px] lg:h-[478px]  md:h-[200px] md:w-[200px]  w-[180px] h-[130px]" width={100} height={100} src={product} alt={`Image`} ></Image>

                    {/* <Image  src={product} alt="product image" ></Image> */}
                    </div>
            </div>
            <div className="flex-col flex items-center lg:gap-10 md:gap-6 gap-4 lg:px-2 px-3 ">
                <h1 className="lg:text-[32px] text-[16px] font-semibold">What makes our Brand Different</h1>
                <div className="lg:h-[244px] grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-4 ">

                    <div className="xl:h-[244px] xl:w-[309px] lg:h-[195px] lg:w-[230px] h-[110px] w-[150px] md:h-[120px] md:w-[160px] bg-color23 text-color6 lg:gap-[10px] gap-[7px] flex flex-col justify-center items-start md:px-5 lg:px-3 xl:px-12 px-3">
                        <div><Image src={logo} alt="logo" width={24} height={24} className="w-[17px] h-[17px] lg:h-[24px] lg:w-[24px]"></Image></div>
                        <h1 className="lg:text-[20px] text-[12px]">Next day as standard</h1>
                        <p className="lg:text-[16px] text-[8px]">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    <div className="xl:h-[244px] xl:w-[309px] lg:h-[195px] lg:w-[230px] h-[110px] w-[150px] md:h-[120px] md:w-[160px] bg-color23 text-color6 lg:gap-[10px] gap-[7px] flex flex-col justify-center items-start md:px-5 lg:px-3 xl:px-12 px-3">
                        <div><Image src={logo2} alt="logo" width={24} height={24} className="w-[17px] h-[17px] lg:h-[24px] lg:w-[24px]" ></Image></div>
                        <h1 className="lg:text-[20px] text-[12px]">Made by true artisans</h1>
                        <p className="lg:text-[16px] text-[8px]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>

                    <div className="xl:h-[244px] xl:w-[309px] lg:h-[195px] lg:w-[230px] h-[110px] w-[150px] md:h-[120px] md:w-[160px] bg-color23 text-color6 lg:gap-[10px] gap-[7px] flex flex-col justify-center items-start md:px-5 lg:px-3 xl:px-12 px-3">
                        <div><Image src={logo3} alt="logo" width={24} height={24} className="w-[17px] h-[17px] lg:h-[24px] lg:w-[24px]"></Image></div>
                        <h1 className="lg:text-[20px] text-[12px]">Unbeatable prices</h1>
                        <p className="lg:text-[16px] text-[8px]">For our materials and quality you won’t find better prices anywhere</p>
                    </div>

                    <div className="xl:h-[244px] xl:w-[309px] lg:h-[195px] lg:w-[230px] h-[110px] w-[150px] md:h-[120px] md:w-[160px] bg-color23 text-color6 lg:gap-[10px] gap-[7px] flex flex-col justify-center items-start md:px-5 lg:px-3 xl:px-12 px-3">
                        <div><Image src={logo4} alt="logo" width={24} height={24} className="w-[17px] h-[17px] lg:h-[24px] lg:w-[24px]" ></Image></div>
                        <h1 className="lg:text-[20px] text-[12px]">Recycled packaging</h1>
                        <p className="lg:text-[16px] text-[8px]">We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>

            <div className="flex-col flex items-start lg:gap-10 md:gap-6 gap-4 lg:px-4 px-2">
            <h1 className="lg:text-[32px] text-[16px] font-semibold">Our Popular Products </h1>
            <div className="flex lg:gap-[16px] gap-2 md:gap-4 ">
                    <div className="xl:h-[462px] xl:w-[630px] flex flex-col text-color26 xl:gap-[24px] lg:gap-[14px]">
                        <Image src={img1} alt="image large" className="lg:h-[375px] lg:w-[630px]  md:w-[270px] md:h-[160px] h-[100px] w-[230px]"></Image>
                        <div className="lg:h-[63px] lg:w-[212px] flex flex-col lg:gap-[8px]">
                            <h2 className="lg:text-[20px] text-[10px] md:text-[14px]">The Poplar suede sofa</h2>
                            <h3 className="lg:text-[18px] text-[8px] md:text-[12px]">$99.00</h3>
                        </div>
                    </div>
                    <div className="lg:h-[462px] lg:w-[305px] flex flex-col  text-color26 xl:gap-[24px] lg:gap-[14px]">
                        <Image src={img2} alt="image" className="lg:h-[375px] lg:w-[305px] md:h-[160px] md:w-[120px] h-[100px] w-[100px]"></Image>
                        <div className="lg:h-[63px] lg:w-[212px] flex flex-col lg:gap-[8px]">
                        <h2 className="lg:text-[20px] text-[10px] md:text-[14px]">The Dandy chair</h2>
                            <h3 className="lg:text-[18px] text-[8px] md:text-[12px]">$99.00</h3>
                        </div>

                    </div>
                    <div className="lg:h-[462px] lg:w-[305px] flex flex-col  text-color26 xl:gap-[24px] lg:gap-[14px]">
                        <Image src={img3} alt="image" className="lg:h-[375px] lg:w-[305px] md:h-[160px] md:w-[120px] h-[100px] w-[100px]"></Image>
                        <div className="lg:h-[63px] lg:w-[212px] flex flex-col lg:gap-[8px]">
                        <h2 className="lg:text-[20px] text-[10px] md:text-[14px]">The Dandy chair</h2>
                            <h3 className="lg:text-[18px] text-[8px] md:text-[12px]">$99.00</h3>
                        </div>

                    </div>                </div>

            </div>
        </div>
    )
}