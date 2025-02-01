"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  hotelName: z
    .string()
    .min(2, { message: "Hotel name must be at least 2 characters." }),
  hotelAddress: z
    .string()
    .min(5, { message: "Hotel address must be at least 5 characters." }),
  // hotelWebsite: z.string().url().optional(),
  hotelCategory: z.enum(["Luxury", "Mid-range", "Budget"]),
  services: z.object({
    waitingRooms: z.boolean(),
    changingRooms: z.boolean(),
    restrooms: z.boolean(),
    premiumWashrooms: z.boolean(),
  }),
  partnershipReason: z.string().min(10, {
    message: "Please provide a reason with at least 10 characters.",
  }),
  locationsCount: z
    .number()
    .min(1, { message: "Please enter at least 1 location." }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function PartnerForm() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Get selected plan when component mounts
  useEffect(() => {
    const plan = localStorage.getItem('selectedPlan');
    setSelectedPlan(plan || '');
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      hotelName: "",
      hotelAddress: "",
      hotelWebsite: "",
      hotelCategory: undefined,
      services: {
        waitingRooms: false,
        changingRooms: false,
        restrooms: false,
        premiumWashrooms: false,
      },
      partnershipReason: "",
      locationsCount: 0,
      termsAccepted: false,
    },
  });

  function onSubmit(values) {
    console.log({ ...values, selectedPlan });
    setShowPopup(true);
  }
  function closepopup() {
    localStorage.removeItem('selectedPlan');
    console.log("closepopup called");
    setShowPopup(false);
    router.push("/");
  }

  return (
     <>
      <Navbar />
       <main id="main-content">
        <div className="container mx-auto p-8 sm:w-[50%] mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hotel Partnership Login Form
      </h1>
      <p className="text-center mb-8">
        Become a partner with Restfree and offer premium waiting & restroom
        services.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries({
              fullName: "Full Name",
              email: "Email Address",
              phone: "Phone Number",
              hotelName: "Hotel Name",
              hotelAddress: "Hotel Address",
              hotelWebsite: "Hotel Website",
            }).map(([key, label]) => (
              <FormField
                key={key}
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input placeholder={label} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="hotelCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { value: "Luxury", label: "Luxury" },
                        { value: "Mid-range", label: "Mid-range" },
                        { value: "Budget", label: "Budget" },
                      ].map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationsCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Locations</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number.parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    How many locations will be involved in the partnership?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    Select the services your hotel offers
                  </FormLabel>
                  <FormDescription>
                    You can select multiple options
                  </FormDescription>
                </div>
                {Object.entries({
                  waitingRooms: "Restfree Waiting Rooms",
                  changingRooms: "Changing Rooms",
                  restrooms: "Restrooms",
                  premiumWashrooms: "Premium Washrooms",
                }).map(([key, label]) => (
                  <FormField
                    key={key}
                    control={form.control}
                    name={`services.${key}`}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{label}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="partnershipReason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you want to partner with Restfree?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your reasons for partnership"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  I agree to the terms and conditions of the partnership
                  program.
                </FormLabel>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">
              Thank you for your registration!
            </h2>
            <p>Your details have been submitted successfully.</p>
            <Button onClick={() => closepopup()} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
      </main>
    </>
  );
}
