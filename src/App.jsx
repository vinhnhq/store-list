import Loadable from 'react-loadable';
import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import StatefullApp from './StatefullApp';

const Waiting = Loadable({
  loader: () => import('./Waiting'),
  loading() {
    return <div>Loading...</div>;
  },
});

const WaitingAlpha = Loadable({
  loader: () => import('./Waiting'),
  loading() {
    return <div>Loading...</div>;
  },
});

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Vinh' };
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.{' '}
          {this.state.name}
        </p>
        <Waiting />
        <WaitingAlpha />
        <StatefullApp />
      </div>
    );
  }
}

export default App;
