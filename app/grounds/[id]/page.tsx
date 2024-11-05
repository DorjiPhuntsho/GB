import { grounds } from "@/app/data/grounds";
import { GroundDetails } from "@/app/components/ground-details";
import { BookingForm } from "@/app/components/booking-form";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return grounds.map((ground) => ({
    id: ground.id.toString(),
  }));
}

export default function GroundPage({ params }: { params: { id: string } }) {
  const ground = grounds.find((g) => g.id === parseInt(params.id));

  if (!ground) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <GroundDetails ground={ground} />
        <BookingForm groundId={ground.id} maxCapacity={ground.capacity} />
      </div>
    </div>
  );
}