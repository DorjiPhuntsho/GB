import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Easy Booking",
      description: "Book your preferred sports ground with just a few clicks",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Availability",
      description: "Check ground availability in real-time",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Multiple Locations",
      description: "Access sports grounds across various locations",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070"
          alt="Sports Ground"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-6 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
            Book Your Perfect
            <br />
            Sports Ground
          </h1>
          <p className="mb-8 text-center text-lg sm:text-xl">
            Find and book the best sports facilities in your area
          </p>
          <Link href="/grounds">
            <Button size="lg" className="text-lg">
              Browse Grounds
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}