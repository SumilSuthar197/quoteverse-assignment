import QuoteList from "../components/QuoteList";
import RandomQuote from "../components/RandomQuote";

const HomePage = () => {
  return (
    <main className="mx-auto px-4 py-8">
      <div className="flex flex-col">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Random Quote
          </h2>
          <RandomQuote />
        </section>
        <section className="space-y-6 mt-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Explore Quote
          </h2>
          <QuoteList />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
