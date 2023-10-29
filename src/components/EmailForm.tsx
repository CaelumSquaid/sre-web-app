"use client";

import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/sendEmail";

const formSchema = z.object({
  email: z.string().email("Must be a valid email format"),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (values: FieldValues) => {
    await sendEmail(values);
    // alert(JSON.stringify(values, null, 2))
  };

  return (
      <Form {...form}>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex items-center justify-between border-2 border-green-500 rounded overflow-hidden relative"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-none outline-none hover:bg-gray-50 focus-visible:ring-none focus-visible:bg-gray-50"
                    placeholder="Your email here..."
                  />
                </FormControl>
                <FormMessage className="absolute bottom-[120%] left-0" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="brand"
            className="rounded-none space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span className="font-bold">Ask a quote</span>
          </Button>
        </form>
      </Form>
  );
}

export default EmailForm;
