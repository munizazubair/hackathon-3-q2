"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/Logo Icon.png"
import { useState } from "react";
export default function Header() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleVisibility = () => {
        return(setIsVisible(isVisible => !isVisible))
    }

    return (
        <div>
            {/* Header 1 */}
            <div className="w-full h-[25px]  md:h-[30px] lg:h-[45px] lg:gap-[180px] flex justify-around bg-color items-center text-color2">
                <div className="flex justify-center items-center lg:gap-[8px] gap-[3px] md:gap-[5px]">
                    <div><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4.5L6.00008 11.8333L2.66675 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>
                    <p className="lg:text-[13px] text-[8px] md:text-[10px]">Free shipping on all orders over $50</p>
                </div>


                <div className="flex lg:gap-[24px] gap-[6px] md:gap-[25px] lg:text-[13px] text-[8px] md:text-[10px] justify-center items-center">
                    <div>
                        <select className="bg-color text-color2 lg:text-[13px] text-[8px] md:text-[10px]" name="languages" id="languages">
                            <option value="eng">Eng</option>
                            <option value="urdu">Urdu</option>
                            <option value="ja">Jap</option>
                            <option value="ru">Rus</option>
                            <option value="ar">Ara</option>
                            <option value="ur">Urdu</option>
                        </select>
                    </div>
                    <p><Link href={"/faq"}>Faqs</Link></p>
                    <div className="flex justify-center items-center lg:gap-[6px] gap-[2px] md:gap-[4px]">
                        <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" clip-path="url(#clip0_1_883)">
                                <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 5.33337V8.00004" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 10.6666H8.00615" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_883">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <p><Link href={"/contact"}>Need Help</Link></p>
                    </div>
                </div>
            </div>
            {/* Header 2 */}
            <div className="w-full h-[54px] md:h-[69px] lg:h-[84px] lg:gap-[380px] gap-[80px] md:gap-[130px] flex justify-around bg-color3 items-center ">
                <div className="flex justify-center items-center lg:gap-[8px] gap-[3.5px] md:gap-[6px] ">
                    <Image className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]" src={logo} alt="main logo"></Image>
                    <h1 className="lg:text-[26px] text-[18px] md:text-[20px] font-medium text-color">Comforty</h1>
                </div>
                
<div className="flex gap-1">


                <Link href={"/cart"}>
                <div className="lg:h-[44px] lg:w-[120px] w-[70px] h-[30px] md:w-[95px] md:h-[38px] bg-white flex justify-center items-center lg:rounded-[8px] lg:gap-[8px] gap-[4px] md:gap-[6px]">
                    <div><svg className="lg:h-[22px] lg:w-[22px] md:h-[18px] md:w-[18px] w-[15px] h-[15px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.52087 2.97913L4.42754 3.30913L5.31029 13.826C5.3442 14.2399 5.5329 14.6257 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3417 17.7431 15.1986 18.0436 14.9382C18.344 14.6778 18.5404 14.3177 18.5965 13.9241L19.4673 7.91263C19.4905 7.75275 19.482 7.58987 19.4422 7.43329C19.4024 7.27671 19.3322 7.12951 19.2354 7.00011C19.1387 6.8707 19.0175 6.76163 18.8786 6.67913C18.7397 6.59663 18.5859 6.54231 18.426 6.51929C18.3673 6.51288 4.73371 6.50829 4.73371 6.50829" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.948 9.89539H15.4899" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5272 6.75515 18.551C6.81811 18.5747 6.87562 18.611 6.9242 18.6575C6.97279 18.704 7.01145 18.7599 7.03787 18.8218C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2133C7.01145 19.2752 6.97279 19.3311 6.9242 19.3777C6.87562 19.4242 6.81811 19.4605 6.75515 19.4842C6.69219 19.5079 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2697 6.08057 19.1461 6.08057 19.0176C6.08057 18.889 6.13021 18.7654 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z" fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z" fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                    <h2 className="text-[12px]  text-color">Cart</h2>
                    <div><svg className="lg:h-[20px] lg:w-[20px] md:h-[18px] md:w-[18px] w-[15px] h-[15px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#007580"/>
<path d="M7.70867 13V12.24C8.16201 11.88 8.59534 11.5167 9.00867 11.15C9.42201 10.7833 9.78867 10.4233 10.1087 10.07C10.4353 9.71 10.692 9.36 10.8787 9.02C11.0653 8.67333 11.1587 8.34 11.1587 8.02C11.1587 7.80667 11.122 7.60667 11.0487 7.42C10.9753 7.22667 10.8553 7.07333 10.6887 6.96C10.522 6.84 10.2987 6.78 10.0187 6.78C9.59867 6.78 9.28201 6.91333 9.06867 7.18C8.86201 7.44667 8.76201 7.76667 8.76867 8.14H7.73867C7.74534 7.64667 7.84867 7.23333 8.04867 6.9C8.25534 6.56667 8.52867 6.31333 8.86867 6.14C9.21534 5.96667 9.60534 5.88 10.0387 5.88C10.6987 5.88 11.2253 6.06667 11.6187 6.44C12.0187 6.80667 12.2187 7.32 12.2187 7.98C12.2187 8.37333 12.122 8.76333 11.9287 9.15C11.742 9.53667 11.4953 9.91 11.1887 10.27C10.8887 10.6233 10.5653 10.9567 10.2187 11.27C9.87201 11.5833 9.54201 11.8667 9.22867 12.12H12.4287V13H7.70867Z" fill="white"/>
</svg>
</div>

                </div>
                </Link>
                </div>
            </div>
            {/* Header 3 */}
            <div className="w-full h-[48px] md:h-[65px] lg:h-[74px] lg:gap-[200px] flex justify-around md:gap-[190px] gap-[110px] bg-white items-center text-color4">
                <div>
                    <div className="lg:hidden visible w-[15px]" onClick={handleVisibility}>
                        {!isVisible ? 
                        <div>
<svg className="h-[25px] w-[25px] md:w-[32px] md:h-[32px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18H10" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
<path d="M4 12L16 12" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
<path d="M4 6L20 6" stroke="#000000" stroke-width="1" stroke-linecap="round"/>
</svg>
                        </div> : 
                        <div className="relative">
                            <ul className="flex flex-col justify-center items-center text-[12px] md:text-[14px] bg-color gap-[5px] text-color2 md:h-[170px] h-[150px] w-[90px] md:w-[110px] absolute -top-3 md:-top-5 z-20">
                                <div className="pr-12 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
                                </div>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li><Link href={"/productpage"}>Product</Link></li>
                        <li><Link href={"/"}>Pages</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                    </ul>
                    </div>}
                    </div>
                    <ul className="lg:gap-[32px] lg:flex justify-center items-center lg:text-[14px] hidden">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li><Link href={"/productpage"}>Product</Link></li>
                        <li><Link href={"/"}>Pages</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                    </ul>
                </div>
               <Link href={"/contact"}>
               <div className="flex justify-center items-center md:text-[14px] text-[12px] lg:gap-[8px] gap-[6px]">
                    <p className="text-color4">Contact:</p>
                    <p className="text-color">(808) 555-0111</p>
                </div>
                </Link>

            </div>

        </div>
    )
}


