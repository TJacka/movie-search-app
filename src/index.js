import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import SearchMovies from './SearchMovies';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);