import { MapPin, Users, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GroundDetailsProps {
  ground: {
    name: string;
    image: string;
    description: string;
    location: string;
    capacity: number;
    pricePerHour: number;
  };
}

export function GroundDetails({ ground }: GroundDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <Image
          src={ground.image}
          alt={ground.name}
          fill
          className="object-cover"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{ground.name}</CardTitle>
          <CardDescription>{ground.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              {ground.location}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="mr-2 h-4 w-4" />
              Maximum Capacity: {ground.capacity} players
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              Available in 1-hour slots
            </div>
            <div className="flex items-center text-muted-foreground">
              <DollarSign className="mr-2 h-4 w-4" />
              ${ground.pricePerHour} per hour
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}