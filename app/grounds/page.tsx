import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const grounds = [
  {
    id: 1,
    name: "Central Football Ground",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070",
    location: "Main Campus Sports Complex",
    capacity: 22,
  },
  {
    id: 2,
    name: "Olympic Tennis Court",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2072",
    location: "West Campus Recreation Center",
    capacity: 4,
  },
  {
    id: 3,
    name: "Indoor Basketball Arena",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069",
    location: "East Campus Sports Hub",
    capacity: 10,
  },
];

export default function GroundsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Available Sports Grounds</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {grounds.map((ground) => (
          <Card key={ground.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={ground.image}
                alt={ground.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{ground.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {ground.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  Capacity: {ground.capacity} players
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/grounds/${ground.id}`} className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}