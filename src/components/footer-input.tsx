"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const emailSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});
type EmailType = z.infer<typeof emailSchema>;

export default function EmailForm() {
  const form = useForm<EmailType>({
    resolver: zodResolver(emailSchema),
  });

  function onSubmit(values: EmailType) {
    console.log("Submitted email:", values.email);
  }

  return (
    <div className="w-full">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row items-center gap-2 lg:gap-1"
      >
        {/* Email Input Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full lg:w-auto">
              <FormControl>
                <Input
                  className="h-[35px] lg:h-[35px] w-full lg:w-[130px] rounded-[6px] border border-color24 px-3 text-[12px] lg:text-[14px] text-color4 focus:outline-none focus:ring-2 focus:ring-color5"
                  placeholder="Enter your email"
                  {...field}
                  aria-label="Email Address"
                />
              </FormControl>
              <FormMessage className="text-[10px] lg:text-[12px] text-red-500 mt-1" />
            </FormItem>
          )}
        />
  
        {/* Submit Button */}
        <Button
          className="h-[35px] lg:h-[35px] w-full lg:w-[85px] bg-color5 text-white rounded-[6px] lg:rounded-[8px] text-[12px] lg:text-[14px] px-4 flex justify-center items-center"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  </div>
  
  );
}
