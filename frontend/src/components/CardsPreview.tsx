import { ChevronRightIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"
interface CardsPreviewProps {
    title: string;
    description: string;
    course: string;
    cards: number;
}
const CardsPreview = ({title, description, course, cards} : CardsPreviewProps) => {
    return <Link
            className="flex flex-col rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow-md transition-transform hover:scale-105 overflow-hidden dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-md dark:hover:scale-105"
            to=""
          >
            <div className="aspect-[16/9] relative">
              <img
                alt="Deck thumbnail"
                className="object-cover object-center"
                height="360"
                src="/react.svg"
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width="640"
              />
              <ChevronRightIcon className="absolute right-2 top-2 h-4 w-4 text-gray-200 translate-x-[-50%] scale-150 dark:text-gray-800" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                {/* <Avatar className="w-6 h-6" /> */}
                <span className="font-medium">{course}</span>
                <span className="text-gray-500 dark:text-gray-400">{cards} cards</span>
              </div>
            </div>
          </Link>
};

export default CardsPreview;
