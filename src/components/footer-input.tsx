"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const emailSchema = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
})
type EmailType = z.infer<typeof emailSchema>

export default function EmailForm() {
    const form = useForm<EmailType>({
        resolver: zodResolver(emailSchema),
    })
    function onSubmit(values: EmailType) {
    }

    return (
        <div>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex lg:gap-[4px]">


                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="lg:h-[35px] lg:w-[150px] rounded-[8px] border-[1px] border-color24 lg:text-[16px] text-[10px] pl-2" placeholder="Your email" {...field} />
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />

                    <Button className="bg-color5 lg:h-[36px] lg:w-[100px] flex justify-center items-center lg:text-[16px] text-[12px] h-[25px] w-[200px] px-1.5  text-white rounded-[4px] lg:rounded-[8px]" type="submit">Subscribe</Button>
                </form>
            </Form>
        </div>
    )
}
