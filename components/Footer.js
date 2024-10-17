import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                YourService
              </span>
            </Link>
          </div>

          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-600 hover:text-primary"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-600 hover:text-primary"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/google-disclosure"
                  className="text-gray-600 hover:text-primary"
                >
                  Google Disclosure
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-primary">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This website is powered by GhostingTech{" "}
            <Link href="#" className="text-primary hover:underline">
              Website Builder
            </Link>{" "}
            and the{" "}
            <Link href="#" className="text-primary hover:underline">
              App Maker
            </Link>{" "}
            is powered by GhostingTech{" "}
            <Link href="#" className="text-primary hover:underline">
              App Builder
            </Link>{" "}
            © 2024. All rights reserved. The technology is protected under US
            Patent No. PCT/US21/36182.
          </p>
        </div>
      </div>
    </footer>
  );
}
