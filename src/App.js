import React from 'react';
import RotatingTitles from './components/RotatingTitles';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <h1>Ashil Saji</h1>
      <RotatingTitles titles={['BTech CSE Student','Data Science Engineer']} />
    </div>
  );
}
