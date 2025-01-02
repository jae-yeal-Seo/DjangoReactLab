import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import Home from './pages/Home'
import About from './pages/About'

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://127.0.0.1:8000/first/graphql/',
    }),
  });

  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
