import { useState, useEffect } from "react";
import Card from "../Card";
import { Loading } from "../Loading";
import { ErrorMessage } from "../ErrorMessage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Quote = {
  id: number;
  quote: string;
  author: string;
};

const QuoteList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchQuotes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=${limit}&skip=${(page-1)*limit}`
      );
      const data = await response.json();
      setQuotes(data.quotes);
      setTotalPages(Math.ceil(data.total / limit)); 
    } catch (err) {
      setError("An error occurred while fetching quotes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  return (
    <div className="space-y-6">
      {isLoading ? (
        <Loading message="Fetching quotes for you..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quotes.map((quote) => (
              <Card key={quote.id} quote={quote} />
            ))}
          </div>
          <div className="flex justify-center gap-3 items-center mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              <FaArrowLeft className="mr-2" /> Previous
            </button>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page >= totalPages}
              className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteList;
