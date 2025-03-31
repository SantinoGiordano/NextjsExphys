import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="bg-black border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
              <Image
                src={"/atpLogo.png"}
                alt="ATP Logo"
                width={70}
                height={250}
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#AboutUs"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#offers"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Our Offers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Reach Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/Our Trusted Referrals"
              className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Our Trusted Referrals
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
