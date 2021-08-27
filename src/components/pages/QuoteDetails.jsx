import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from './../comments/Comments';

const QuoteDetails = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h2>quote details</h2>
      <p>q id: {quoteId}</p>
      <Route path={`/quotes/:${quoteId}/comments`}>
        {/* <Comments /> */}
        <h3>comments test</h3>
      </Route>
    </>
  );
};

export default QuoteDetails;
