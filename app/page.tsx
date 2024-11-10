import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { VehicleCard } from "@/components/vehicle/VehicleCard";

const vehicles = [
  {
    id: 1,
    name: "Wuling Air EV",
    description: "Wuling Air EV Long Range 300km",
    price: "Rp 500.000",
    duration: "24 hours",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Wuling Air EV",
    description: "Wuling Air EV Long Range 300km",
    price: "Rp 500.000",
    duration: "24 hours",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Wuling Air EV",
    description: "Wuling Air EV Long Range 300km",
    price: "Rp 500.000",
    duration: "24 hours",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Wuling Air EV",
    description: "Wuling Air EV Long Range 300km",
    price: "Rp 500.000",
    duration: "24 hours",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&h=300&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1E22] text-white pb-24">
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="px-4">
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden mb-8">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Car rental handover"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-center mb-8">
              Lets start your journey!
            </h1>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#B88A2B] hover:bg-[#96712B] text-white px-8 py-6 rounded-xl">
                Choose Vehicle
              </Button>
              <Button className="bg-[#B88A2B] hover:bg-[#96712B] text-white px-8 py-6 rounded-xl">
                Choose Date
              </Button>
            </div>
          </div>
        </section>

        {/* Vehicle Section */}
        <section className="py-12">
          <div className="px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Our most favorite vehicle</h2>
              <Button variant="link" className="text-[#B88A2B]">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  name={vehicle.name}
                  description={vehicle.description}
                  price={vehicle.price}
                  duration={vehicle.duration}
                  image={vehicle.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
