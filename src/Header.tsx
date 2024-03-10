import { Link } from "react-router-dom";
import { SunIcon } from "@heroicons/react/solid";

// Header component
export const Header = () => (
  <header className="border-b">
    <div className="container px-4 lg:px-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between xl:gap-4 py-6 lg:py-10">
      <div className="flex items-center gap-2">
        <Link className="flex items-center gap-2 font-medium" to="">
          <SunIcon className="h-6 w-6" />
          <span className="sr-only">Flashcards</span>
        </Link>
      </div>
      <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <Link className="text-sm hover:underline underline-offset-4" to="">
          Decks
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" to="">
          Create
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" to="">
          Profile
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" to="">
          Settings
        </Link>
      </nav>
    </div>
  </header>
);
