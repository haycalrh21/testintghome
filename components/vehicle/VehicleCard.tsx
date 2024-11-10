import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VehicleCardProps {
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export function VehicleCard({ name, description, price, duration, image }: VehicleCardProps) {
  return (
    <Card className="bg-[#2A2D31] border-gray-800 text-white">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">{price}</p>
            <p className="text-sm text-gray-400">/ {duration}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-transparent border border-[#B88A2B] text-[#B88A2B] hover:bg-[#B88A2B] hover:text-white">
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  );
}