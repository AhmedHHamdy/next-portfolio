"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from '@emailjs/browser'

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
import { ArrowUpRight } from "lucide-react";
import { toast, useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters"
  })
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const { toast } = useToast()
  
  console.log(form.getValues())

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })

    try {
      // await emailjs.send('service_ypxcyww', 'template_q6xzxce', data, 'qZrVeT9nInjm361MU')
       toast({
         description: "Your message has been sent.",
       });
       form.resetField("name")
       form.resetField("email")
       form.resetField("message")
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Error occurred."
      });
    }
  }

  return (
    <section className="relative flex px-8 sm:px-10 w-full sm:w-11/12 md:w-9/12 xl:w-12/12 flex-col items-center gap-10 mx-auto pt-8 sm:pt-16 xl:max-w-6xl bg-background min-h-screen z-50">
      <h1 className="text-4xl font-semibold self-start mt-3">Contact Me</h1>
      <section className="text-lg text-gray-400 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-4 gap-y-10">
            <FormField
              control={form.control}
              name="name"
              
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className="col-span-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem className="col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="h-32" placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="col-span-2">Send</Button>
          </form>
        </Form>
      </section>

      <section className="self-start flex justify-between items-center gap-6 mt-2">
        <a
          className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white"
          href="#"
          target="_blank"
        >
          Github
          <ArrowUpRight className="h-4" />
        </a>
        <a
          className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white"
          href="#"
          target="_blank"
        >
          Linkedin
          <ArrowUpRight className="h-4" />
        </a>
        <a
          className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white"
          href="#"
          target="_blank"
        >
          Twitter
          <ArrowUpRight className="h-4" />
        </a>
        <a
          className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white"
          href="#"
          target="_blank"
        >
          Email
          <ArrowUpRight className="h-4" />
        </a>
      </section>
    </section>
  );
}
