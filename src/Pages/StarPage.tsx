import { useEffect, useState } from "react";
import Card from "../components/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type Quote = {
    id: number;
    quote: string;
    author: string;
};

const StarPage = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const fetchFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]");
        setQuotes(favorites);
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <main className="mx-auto px-4 py-8">
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Starred Quotes</h2>
                {quotes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center p-10 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-900">
                        <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-500 mb-4" />
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                            No favorite quotes yet!
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Start adding some inspiring quotes to your favorites.
                        </p>
                        <Link
                            to="/"
                            className="bg-blue-600 text-white px-4 py-[5px] rounded-md"
                        >
                            Find Quotes
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {quotes.map((quote) => (
                            <Card quote={quote} fetchFavorites={fetchFavorites} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default StarPage;
