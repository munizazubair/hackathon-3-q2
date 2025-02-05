import Link from "next/link";

export default function OrderCancel() {
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
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M10.29 3.86l-7.1 12.32c-.31.54-.07 1.2.55 1.2h14.32c.62 0 .86-.66.55-1.2l-7.1-12.32a1 1 0 00-1.7 0z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M12 9v2m0 4h.01"
  />
</svg>

  
<h1 className="text-[24px] lg:text-[36px] text-black font-bold text-center">
Your Order Has Been Cancelled!
              </h1>
            </div>
            <p className="text-[13px] mx-2 lg:text-[16px] text-[#8D92A7] text-center mb-6">
              We&apos;re sorry, but your order could not be processed and has been
              cancelled. If you have any questions or need assistance, please
              contact our support team.
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
  