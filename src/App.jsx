import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetails from './components/pages/QuoteDetails';
import NewQuote from './components/pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// domain.com/quotes
// domain.com/quotes/:quoteId
// domain.com/new-quote
