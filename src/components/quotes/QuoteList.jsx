import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { dbUrl } from './../../config';

const QuoteList = (props) => {
  const [quotes, setQuotes] = useState(props.quotes);
  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    (async () => {
      const quotes = await axios.get(dbUrl);

      console.log(quotes.data);
    })();
  }, []);

  const sortHandler = () => {
    if (direction === 'desc') {
      setDirection('asc');
      return quotes.sort((a, b) => b.author.localeCompare(a.author));
    } else if (direction === 'asc') {
      setDirection('desc');
      return quotes.sort((a, b) => a.author.localeCompare(b.author));
    }
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>sort {direction}</button>
      </div>
      <ul className={classes.list}>
        {(quotes || []).map((quote) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
