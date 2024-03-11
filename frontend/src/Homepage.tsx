import CardsPreview from "./components/CardsPreview";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/clerk-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const Homepage = () => {
  const { isAuthenticated } = useConvexAuth();
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <Header />
    <main className="flex-1 bg-gray-100/90 dark:bg-gray-800/90 py-6 lg:py-10">
      <div className="container px-4 lg:px-6 flex flex-col gap-4">
        <div className="space-y-4 text-center">
          <h1>Your Flashcards</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Study smarter with our flashcards app. Create your own decks or choose from thousands of user-generated
            flashcards.
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <CardsPreview title="SAT Vocabulary" description="Improve your vocabulary for the SAT exam." course="englishclass" cards={100} />
          <CardsPreview title="French Vocabulary - Adjectives" description="Learn common French adjectives with this deck." course="frenchclass" cards={25} />
          <CardsPreview title="Biology - Human Anatomy" description="Study the human body with these flashcards." course="sciencegeek" cards={50} />
          <CardsPreview title="SAT Vocabulary" description="Improve your vocabulary for the SAT exam." course="englishclass" cards={100} />

        </div>
      </div>
    </main>
    <Footer />
    <div className="fixed bottom-4 gap-4 right-4">
        {isAuthenticated ? <SignOutButton /> :
        <div>
          <SignUpButton />
          <SignInButton />
        </div> }
      </div>
  </div>
  );
}
