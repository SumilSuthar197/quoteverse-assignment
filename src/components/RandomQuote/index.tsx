import { useState, useEffect } from "react";
import Card from "../Card";
import { FaSyncAlt } from "react-icons/fa";
import { Loading } from "../Loading";
import { ErrorMessage } from "../ErrorMessage";
import { Quote } from "../../app.type";

const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(
        "An error occurred while fetching a random quote. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="space-y-6">
      {isLoading ? (
        <Loading message="Fetching a random quote for you..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <Card key={quote?.id} quote={quote!} />
      )}
      <div className="flex w-full justify-center">
        <button
          onClick={() => fetchRandomQuote()}
          className="flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
          disabled={isLoading}
        >
          <FaSyncAlt className="mr-2  group-hover:rotate-180" />
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
