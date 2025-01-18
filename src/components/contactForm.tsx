"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(50, { message: "Username must be less than 50 characters." }),
    email: z.string().email({ message: "Enter a valid email" }),
    subject: z.string().optional(),
    message: z.string({
        message: "Required"
    })
})
type FormType = z.infer<typeof formSchema>

export default function ContactForm() {
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
    })
    function onSubmit(values: FormType) {
    }

    return (
        <div>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:gap-[40px] gap-[35px] md:gap-[45px]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="lg:h-[121px] h-[60px] lg:w-[530px] w-[300px]  flex flex-col justify-between items-start ">
                                <FormLabel className="lg:text-[16px] text-[12px] md:text-[14px] text-black font-semibold">Your name</FormLabel>
                                <FormControl>
                                    <Input className="text-black lg:h-[75px] h-[40px] md:h-[60px] lg:w-[528px] w-[300px] md:w-[450px] border-[1px] border-color15 rounded-[5px] lg:rounded-[10px] lg:text-[16px] text-[12px] md:text-[14px] lg:pl-[25px] pl-[15px] md:pl-[20px]" placeholder="Abc" {...field} />
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="lg:h-[121px] h-[60px] lg:w-[530px] w-[300px]  flex flex-col justify-between items-start">
                                <FormLabel className="lg:text-[16px] text-[12px] md:text-[14px] text-black font-semibold">Email address</FormLabel>
                                <FormControl>
                                    <Input className="text-black lg:h-[75px] h-[40px] md:h-[60px] lg:w-[528px] w-[300px] md:w-[450px] border-[1px] border-color15 rounded-[5px] lg:rounded-[10px] lg:text-[16px] text-[12px] md:text-[14px] lg:pl-[25px] pl-[15px] md:pl-[20px]" placeholder="Abc@def.com" {...field} />
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem className="lg:h-[121px] h-[60px] lg:w-[530px] w-[300px]  flex flex-col justify-between items-start">
                                <FormLabel className="lg:text-[16px] text-[12px] md:text-[14px] text-black font-semibold">Subject</FormLabel>
                                <FormControl>
                                    <Input className="text-black lg:h-[75px] h-[40px] md:h-[60px] lg:w-[528px] w-[300px] md:w-[450px] border-[1px] border-color15 rounded-[5px] lg:rounded-[10px] lg:text-[16px] text-[12px] md:text-[14px] lg:pl-[25px] pl-[15px] md:pl-[20px]" placeholder="This is an optional" {...field} />
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="lg:h-[121px] h-[95px] lg:w-[530px] w-[300px]  flex flex-col justify-between items-start mb-[40px]">
                                <FormLabel className="lg:text-[16px] text-[12px] md:text-[14px] text-black font-semibold">Message</FormLabel>
                                <FormControl>
                                    <Textarea className="text-black lg:h-[120px] h-[60px] lg:w-[528px] w-[300px]  md:w-[450px] border-[1px] border-color15 rounded-[5px] lg:rounded-[10px] lg:text-[16px]  text-[12px] md:text-[14px] lg:pl-[25px] pl-[15px] md:pl-[20px] lg:pt-[30px] pt-[20px] md:pt-[25px]" placeholder="Hi! i’d like to ask about" {...field} ></Textarea>
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />

                    <Button className="lg:h-[55px] h-[35px] md:h-[45px] lg:w-[237px] w-[150px] md:w-[200px] border-[1px] border-color16 lg:rounded-[5px] rounded-[3px] flex justify-center items-center text-white lg:text-[16px] bg-color5" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
