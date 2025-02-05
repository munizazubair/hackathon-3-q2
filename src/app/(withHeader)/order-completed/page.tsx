// import Image from "next/image";
// import image1 from "../../../public/Vector 16.png";
// import image2 from "../../../public/Ellipse 70.png";
// import image3 from "../../../public/Vector 15 (1).png";

import Link from "next/link";


export default function OrderCompleted() {
    return (
      <div>

        <div className="flex justify-center items-center my-20">
              <div className="lg:h-[326px] h-[260px] w-[400px] lg:w-[625px]  flex justify-between items-center flex-col ">
              <div className="flex flex-col items-center relative gap-3">

  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 lg:h-20 lg:w-20 text-color6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Circle */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    {/* Tick */}
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12l2 2 4-4"
    />
  </svg>
            <h1 className="text-[24px] lg:text-[36px] text-black font-bold">
              Your Order Is Completed!
            </h1>
            </div>
            <p className="text-[13px] mx-2 lg:text-[16px] text-[#8D92A7] text-center mb-6">
              Thank you for your order! Your order is being processed and will be
              completed within 3-6 hours. You will receive an email confirmation
              when your order is completed.
            </p>
            <Link href={"/shop"}>
            <button className="lg:h-[59px] lg:w-[208px] h-[40px] w-[180px] text-white  bg-color6 rounded-[3px] transition">
              Continue Shopping
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
  