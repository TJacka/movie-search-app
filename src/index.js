import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import SearchMovies from './SearchMovies';

function Main() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Main />);