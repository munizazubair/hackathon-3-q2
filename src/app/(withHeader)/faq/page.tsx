import Image from "next/image"
import addLogo from "/public/Plus.png"

interface FaqInterface {
    question: string,
    answer: string
}

export default function Faq() {
    const FaqData: FaqInterface[] = [
        {question:"What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
        {question:"How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
        {question:"Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
        {question:"What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
        {question:"Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
        {question:"How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
    ]
    return(
        <div className="flex flex-col items-center pb-40 pt-5 md:pb-2 xl:pt-32 xl:pb-0 lg:pb-80">
            <div className=" xl:h-[1144px] lg:h-[1000px] h-[950px] md:h-[1200px] md:pt-[20px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white items-center flex flex-col lg:gap-[70px] gap-[36px] md:gap-[63px]">

                <div className="flex flex-col justify-center items-center lg:gap-[15px] gap-[8px] md:gap-[12px]">
        <h1 className="lg:text-[36px] text-[26px] md:text-[30px] text-black font-bold">Questions Looks Here</h1>
        <p className="lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:leading-[24px] leading-[15px] md:leading-[20px] text-center lg:w-[644px] lg:h-[48px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>

                <div className="xl:h-[558pxpx] xl:w-[1320px]  grid grid-cols-1 xl:grid-cols-2 lg:gap-[10px] gap-[12px]">
                {FaqData.map((item) => (
                    <div className="lg:h-[170px] xl:w-[648px] h-[150px] md:w-[550px] w-[98%] bg-color19 flex flex-col justify-center items-start xl:rounded-[8px] xl:gap-[24px] xl:px-[15px] gap-[18px] md:gap-[20px]">
                        <div className="flex justify-between xl:w-[600px] md:w-[550px] w-[98%]  ">
                        <div className="font-semibold text-black lg:text-[18px] text-[14px] md:text-[16px] ">{item.question}</div>
                        <div><Image src={addLogo} alt="add icon"></Image></div>
                            </div>                    
                        <div className="xl:text-[16px] text-[12px] md:text-[14px] xl:leading-[24px] text-color20">{item.answer}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}