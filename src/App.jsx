import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import StatefullApp from './StatefullApp';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
    <p className={styles.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <StatefullApp />
  </div>
);

export default App;
