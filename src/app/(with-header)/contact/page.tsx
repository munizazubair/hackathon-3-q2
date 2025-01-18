import Image from "next/image"
import image1 from "/public/trophy 1.png"
import image2 from "/public/guarantee.png"
import image3 from "/public/customer-support.png"
import icon1 from "/public/Vector.png"
import icon2 from "/public/bxs_phone.png"
import icon3 from "/public/bi_clock-fill.png"
import ContactForm from "@/components/contactForm"

export default function Contact() {
    return(
        <div className="flex flex-col items-center pb-10 ">

<section className=" xl:h-[1144px] lg:h-[1000px] h-[950px] pt-[300px]  lg:pt-40 md:h-[1200px] md:pt-[250px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white justify-center items-center flex flex-col lg:gap-[60px] gap-[40px] md:gap-[63px]">
    <div className="flex flex-col justify-center items-center lg:gap-[15px] gap-[8px] md:gap-[12px]">
        <h1 className="lg:text-[36px] text-[26px] md:text-[30px] text-black font-bold">Get In Touch With Us</h1>
        <p className="lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:leading-[24px] leading-[15px] md:leading-[20px] text-center lg:w-[644px] lg:h-[48px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>
    <div className="lg:h-[923px] lg:w-[1058px] lg:flex-row flex flex-col justify-around items-start lg:px-10 gap-20 md:gap-28 ">
        <div className="lg:h-[573px] lg:w-[393px] flex flex-col items-start lg:gap-[30px] gap-[12px] md:gap-[20px]">

            <div className="flex justify-center items-start lg:gap-[16px] gap-[12px] md:gap-[12px]">
                <div><Image src={icon1} alt="icon 1" width={22} height={27}></Image></div>
                <div>
                    <h1 className="lg:text-[24px] text-[16px] md:text-[22px] text-black font-semibold">Address</h1>
                    <p className="lg:leading-[19.36px] leading-[14.36px] md:leading-[16.36px] lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:w-[212px] lg:h-[57px]">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
            </div>
            
            <div className="flex justify-center items-start lg:gap-[16px] gap-[12px] md:gap-[12px]">
                <div><Image src={icon2} alt="icon 2" width={30} height={30}></Image></div>
                <div>
                    <h1 className="lg:text-[24px] text-[16px] md:text-[22px] text-black font-semibold">Phone</h1>
                    <p className="lg:leading-[19.36px] lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:w-[212px] lg:h-[57px]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
            </div>

            <div className="flex justify-center items-start lg:gap-[16px] gap-[12px] md:gap-[12px]">
                <div><Image src={icon3} alt="icon 3" width={23} height={23}></Image></div>
                <div>
                    <h1 className="lg:text-[24px] text-[16px] md:text-[22px] text-black font-semibold">Working Time</h1>
                    <p className="lg:leading-[19.36px] lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:w-[212px] lg:h-[57px]">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                </div>
            </div>
        </div>
        <div className="lg:w-[635px] lg:h-[923px] h-[800px] md:h-[900px]">
            <ContactForm />
        </div>
    </div>
                
            </section>

            <section className=" xl:h-[240px] lg:h-[280px] h-[190px] md:h-[250px] lg:w-[1000px] xl:w-[1321px] w-[90%] md:w-[700px] bg-color13 justify-around lg:pl-16 items-center  grid lg:grid-cols-3 grid-cols-1 ">
                <div className="lg:h-[70px] lg:w-[337px]  flex lg:gap-[10px] gap-[6px] md:gap-[8px] justify-start items-center">
                    <div><Image className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" src={image1} alt="image 1 trophee" height={60} width={60}></Image></div>
                    <div className="flex flex-col lg:gap-[2px] gap-[1px]">
                        <div className="lg:text-[25px] text-[18px] md:text-[20px] text-black">High Quality</div>
                        <div className="lg:text-[20px] text-[16px] md:text-[17px] text-color14">crafted from top materials</div>
                    </div>
                </div>
                
                <div className="lg:h-[70px] lg:w-[337px] flex lg:gap-[10px] gap-[6px] md:gap-[8px] justify-start items-center">
                    <div><Image className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" src={image2} alt="image 2 guarantee" height={60} width={60}></Image></div>
                    <div className="flex flex-col lg:gap-[2px] gap-[1px]">
                    <div className="lg:text-[25px] text-[18px] md:text-[20px] text-black">Warranty Protection</div>
                        <div className="lg:text-[20px] text-[16px] md:text-[17px] text-color14">Over 2 years</div>
                    </div>
                </div>

                <div className="lg:h-[70px] lg:w-[337px] flex lg:gap-[10px] gap-[6px] md:gap-[8px] justify-start items-center">
                    <div><Image className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" src={image3} alt="image 3 customer support" height={60} width={60}></Image></div>
                    <div className="flex flex-col lg:gap-[2px] gap-[1px]">
                    <div className="lg:text-[25px] text-[18px] md:text-[20px] text-black">24 / 7 Support</div>
                        <div className="lg:text-[20px] text-[16px] md:text-[17px] text-color14">Dedicated support</div>
                    </div>
                </div>
            </section>
        </div>
    )
}