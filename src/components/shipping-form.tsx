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
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const shippingSchema = z.object({
    email_or_phone: z.union([
        z.string().email({ message: "Enter a valid email address." }),
        z.string()
            .regex(/^\d+$/, { message: "Enter a valid phone number." })
            .min(10, { message: "Phone number must be at least 10 digits." })
            .max(15, { message: "Phone number must not exceed 15 digits." }),
    ]),
        start_name: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }).max(50, { message: "First name must be less than 50 characters." }),
    last_name: z.string()
        .min(2, { message: "Last name must be at least 2 characters." })
        .max(50, { message: "Last name must be less than 50 characters." })
        .optional(),
    email: z.string().email({ message: "Enter a valid email address." }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters long.",
    }).max(100, { message: "Address must not exceed 100 characters." }),
    country: z.string().min(2, {
        message: "Country must be at least 2 characters.",
    }).max(50, { message: "Country must not exceed 50 characters." }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }).max(50, { message: "City must not exceed 50 characters." }),
    postal_code: z.string()
        .min(4, { message: "Postal code must be at least 4 characters." })
        .max(10, { message: "Postal code must not exceed 10 characters." })
        .regex(/^\d+$/, { message: "Postal code must contain only numbers." }),
});

type shippingType = z.infer<typeof shippingSchema>

export default function ShippingForm() {
    const form = useForm<shippingType>({
        resolver: zodResolver(shippingSchema),
    })
    function onSubmit(values: shippingType) {
    }

    return (
        <div>
            <Form {...form}>


                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="lg:col-span-2 bg-[#F8F8FD]   py-[50px] px-5">
                        <div className="space-y-6 flex flex-col gap-10">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 ">Contact Information</h3>
                                <FormField
                                        control={form.control}
                                        name="email_or_phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className="w-full border rounded p-2 bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="Email or mobile phone number" {...field}  />
                                                </FormControl>
                                                <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                                </FormItem>
                                        )}
                                    />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Shipping Address</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="start_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className=" rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-2 border-b-[#BFC6E0] " placeholder="First name" {...field} />
                                                </FormControl>
                                                <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                                </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className="border-2 rounded  p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="Last name (optional)" {...field} />
                                                </FormControl>
                                                {/* <FormMessage className="text-[10px] md:text-[12px] lg:text-[10px] xl:text-[16px]" /> */}
                                            </FormItem>
                                        )}
                                    />


                                </div>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="border-2 rounded p-2 w-full mt-4 bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="Address" {...field} />
                                            </FormControl>
                                            <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                        </FormItem>
                                    )}
                                />

                               

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">


                                    <FormField
                                        control={form.control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="Country" {...field} />
                                                </FormControl>
                                                <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                                </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="City" {...field} />
                                                </FormControl>
                                                <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                                </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                                    <FormField
                                        control={form.control}
                                        name="postal_code"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" placeholder="Postal Code" {...field} />
                                                </FormControl>
                                                <FormMessage className=" text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                                                </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <Button className=" bg-color5 text-white py-2 rounded-[2px] h-[44px] w-[182px] mt-4 hover:bg-color6">
                                Continue Shipping
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}


