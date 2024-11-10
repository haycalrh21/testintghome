import { Info, FileText, Phone } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1E22]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          BALIGU
        </Link>
        <div className="flex gap-4">
          <Link
            href="/info"
            className="text-[#B88A2B] hover:text-[#96712B] transition-colors"
          >
            <Info className="w-6 h-6" />
          </Link>
          <Link
            href="/docs"
            className="text-[#B88A2B] hover:text-[#96712B] transition-colors"
          >
            <FileText className="w-6 h-6" />
          </Link>
          <Link
            href="/contact"
            className="text-[#B88A2B] hover:text-[#96712B] transition-colors"
          >
            <Phone className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
