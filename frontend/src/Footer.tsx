import { Link } from "react-router-dom";

// Footer component
export const Footer = () => (

  <footer className="flex items-center justify-center py-4 sm:py-6 bg-gray-50 shrink-0">
    <nav className="flex flex-col gap-2 text-sm">
      <Link className="underline underline-offset-4" to="">
        Terms of Service
      </Link>
      <Link className="underline underline-offset-4" to="">
        Privacy Policy
      </Link>
      <Link className="underline underline-offset-4" to="">
        Contact Us
      </Link>
    </nav>
  </footer>
);
