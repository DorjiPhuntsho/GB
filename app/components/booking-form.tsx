"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { timeSlots } from "../data/time-slots";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";

const bookingSchema = z.object({
  date: z.date(),
  timeSlot: z.string().min(1, "Please select a time slot"),
  numberOfPlayers: z.string().transform((val) => parseInt(val, 10)).refine((val) => val > 0, "Must be greater than 0"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  groundId: number;
  maxCapacity: number;
}

export function BookingForm({ groundId, maxCapacity }: BookingFormProps) {
  const router = useRouter();
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: new Date(),
      timeSlot: "",
      numberOfPlayers: "1",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    if (data.numberOfPlayers > maxCapacity) {
      toast.error(`Maximum capacity is ${maxCapacity} players`);
      return;
    }

    // In a real app, this would be an API call
    const booking = {
      groundId,
      ...data,
      status: "Confirmed",
    };

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Booking confirmed successfully!");
    router.push("/bookings");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book this ground</CardTitle>
        <CardDescription>
          Select your preferred date and time slot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date > new Date().setMonth(new Date().getMonth() + 2)
                      }
                      className="rounded-md border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
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
              name="numberOfPlayers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Players</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max={maxCapacity}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Book Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}