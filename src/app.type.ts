export type Quote = {
  id: number;
  quote: string;
  author: string;
};

export type QuoteProps = {
  quote: Quote;
  fetchFavorites?: () => void;
};

export type MessageProps = {
  message: string;
};
