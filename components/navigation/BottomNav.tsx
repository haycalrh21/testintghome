import { Home, Car, Book, User } from "lucide-react";
import Link from "next/link";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1C1E22]/80 backdrop-blur-lg border-t border-gray-800 py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-[#B88A2B]">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/vehicle"
            className="flex flex-col items-center text-gray-400 hover:text-[#B88A2B] transition-colors"
          >
            <Car className="w-6 h-6 mb-1" />
            <span className="text-xs">Vehicle</span>
          </Link>
          <Link
            href="/booking"
            className="flex flex-col items-center text-gray-400 hover:text-[#B88A2B] transition-colors"
          >
            <Book className="w-6 h-6 mb-1" />
            <span className="text-xs">Booking</span>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center text-gray-400 hover:text-[#B88A2B] transition-colors"
          >
            <User className="w-6 h-6 mb-1" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
