import Image from "next/image"
import mainlogo from "/public/Logo Icon.png"
import icons from "/public/Social Links.png"
import paymentlogos from "/public/Rectangle 33.png"
import EmailForm from "@/components/footer-input"

export default function Footer() {
    return(
        <div className="lg:h-[418px] bg-white w-full z-10 border-t-[1px] border-color24 pt-6 lg:px-5 px-2">
            <div className="lg:h-[343px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 justify-around items-start">
                <div className="lg:h-[198px] xl:w-[300px] flex flex-col lg:gap-[24px] gap-[10px]">
                    <div className="flex lg:gap-[8px] gap-1">
                        <div><Image height={30} width={30} src={mainlogo} alt="logo" className="h-[25px] w-[25px]"></Image></div>
                        <h1 className="lg:text-[26px] text-[19px]">Comforty</h1>
                        </div>

                        <p className="lg:text-[16px] text-[8px] text-color pr-16">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                        Cras egestas purus </p>
                        <div><Image src={icons} alt="icons" className="h-[23px] w-[120px]"></Image></div>
                </div>
                <div className="lg:h-[203px] xl:w-[90px] w-[100px] flex flex-col gap-[10px]">
                    <h2 className="lg:text-[14px] text-[12px] text-color9">Category</h2>
                    <div className=" clas flex flex-col text-black lg:text-[16px] text-[10px]">
                        <div>Sofa</div>
                        <div>Armchair</div>
                        <div>Wing Chair</div>
                        <div className="text-color5">Desk Chair</div>
                        <div>wooden Chair</div>
                        <div>Park Bench</div>
                    </div>
                </div>
                <div className="lg:h-[143px] xl:w-[126px] w-[120px] flex flex-col gap-[10px]">
                <h2 className="lg:text-[14px] text-[12px] text-color9">Support</h2>
                    <div className=" clas flex flex-col text-black lg:text-[16px] text-[10px]">
                        <div>Help & Support</div>
                        <div>Tearms & Conditions</div>
                        <div>Privacy Policyr</div>
                        <div>Help</div>
                </div>
                </div>
                <div className="lg:h-[142px] xl:w-[330px] w-[120px] flex flex-col gap-[10px] pb-6 lg:p-0">
                <h2 className="lg:text-[14px] text-[12px] text-color9">Newsletter</h2>
                <div className="flex flex-col gap-[10px]">
                   <EmailForm />
                    <p className=" lg:text-[16px] text-[10px] text-color12 w-[180px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>                
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-color25"></div>
            <div className="lg:h-[75px] h-[50px] flex flex-col lg:flex-row justify-around items-center text-color25 lg:text-[16px] text-[13.5px]">
                <div className="lg:text-[16px] text-[12px]">@ 2021 - Blogy - Designed & Develop by Zakirsoft</div>
                <div><Image className="h-[20px] w-[80px]" height={27} width={227} src={paymentlogos} alt="logos"></Image></div>
            </div>
        </div>
    )
}