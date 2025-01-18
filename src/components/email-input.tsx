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

export default function EmailInput() {
    const form = useForm<EmailType>({
        resolver: zodResolver(emailSchema),
    })
    function onSubmit(values: EmailType) {
    }

    return (
        <div>
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center lg:gap-[20px] gap-[13px] md:gap-[17px]">


                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="lg:h-[32px] lg:w-[643px] w-[200px] h-[26px] md:h-[29px] text-[12px] md:text-[14px] text-colo18 border-b-2 border-color18 bg-transparent lg:pl-4 pl-2 border-x-transparent border-t-transparent" placeholder="Email address..." {...field} />
                                </FormControl>
                                <FormMessage className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]" />
                            </FormItem>
                        )}
                    />

                    <Button className="lg:h-[32px] lg:w-[91px] w-[60px] md:w-[80px] h-[26px] md:h-[29px] lg:text-[16px] text-[12px] md:text-[14px] text-colo18 border-b-2 border-color18 bg-transparent border-x-transparent border-t-transparent" type="submit">SUBMIT</Button>
                </form>
            </Form>
        </div>
    )
}
