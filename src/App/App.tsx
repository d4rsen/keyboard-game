import React, {FC} from 'react';
import './App.scss'
import Router from './Router';

const App: FC = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <Router/>
      </main>
    </div>
  );
};

export default App;
