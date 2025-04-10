import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="bg-black border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={"/atpLogo.png"}
              alt="ATP Logo"
              width={50}
              height={100}
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#AboutUs"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#offers"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Our Offers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* <Link
              href="#Referrals"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Our Trusted Referrals
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link> */}

            <Link
              href="ReachUs"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Reach Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
