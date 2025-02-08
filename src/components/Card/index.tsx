import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Quote, QuoteProps } from "../../app.type";

const QuoteCard = ({ quote, fetchFavorites }: QuoteProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]");
    setIsFavorite(favorites.some((fav: Quote) => fav.id === quote.id));
  }, [quote.id]);

  const toggleFavorite = () => {
    let favorites: Quote[] = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== quote.id);
    } else {
      favorites.push(quote);
    }

    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
    if (fetchFavorites) fetchFavorites();
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg px-6 pt-4 pb-4 w-full mx-auto transition-transform transform hover:shadow-xl flex justify-between flex-col">
      <div className="relative">
        <div className="text-xl font-semibold italic text-gray-800 dark:text-gray-100 relative">
          “{quote.quote}”
        </div>
      </div>
      <div className="mt-6 w-full flex justify-between items-end text-sm font-medium text-gray-600 dark:text-gray-400">
        <button
          onClick={toggleFavorite}
          className=" dark:bg-gray-800 p-2 rounded-full shadow-md border dark:border-none hover:scale-110 hover:bg-yellow-400 dark:hover:bg-yellow-400"
        >
          <FaStar className={`w-4 h-4 ${isFavorite ? "text-yellow-600" : "text-gray-500"}`} />
        </button>
        <span>— {quote.author || "Unknown"}</span>
      </div>
    </div>
  );
};

export default QuoteCard;
