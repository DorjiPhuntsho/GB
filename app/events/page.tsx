import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    name: "Summer Football Tournament",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076",
    date: "2024-06-15",
    location: "Central Football Ground",
    participants: "16 teams",
    description: "Annual summer football tournament with prizes and refreshments.",
  },
  {
    id: 2,
    name: "Tennis Championship",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070",
    date: "2024-07-20",
    location: "Olympic Tennis Court",
    participants: "32 players",
    description: "Singles and doubles tennis championship for all skill levels.",
  },
  {
    id: 3,
    name: "Basketball League",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071",
    date: "2024-08-10",
    location: "Indoor Basketball Arena",
    participants: "8 teams",
    description: "Monthly basketball league with weekly matches and playoffs.",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {event.participants}
                </div>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/events/${event.id}`} className="w-full">
                <Button className="w-full">Register for Event</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}