import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from './../quotes/QuoteForm';
import { dbUrl } from '../../config';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = async (quoteData) => {
    console.log(quoteData);

    const result = await axios.post(dbUrl, quoteData);
    console.log(result);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
