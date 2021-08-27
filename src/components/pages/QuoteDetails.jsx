import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from './../comments/Comments';
import { DUMMY_QUOTES } from './AllQuotes';
import HighlightedQuote from './../quotes/HighlightedQuote';
import NotFound from './NotFound';

const QuoteDetails = () => {
  const { quoteId } = useParams();

  // surasti ir atrinkti objekta is dummy masyvo kuriame siuo metu yra puslapis
  const quoteObj = DUMMY_QUOTES.find((q) => q.id === quoteId);

  if (!quoteObj) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote author={quoteObj.author} text={quoteObj.text} />

      <Route path={`/quotes/:${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
