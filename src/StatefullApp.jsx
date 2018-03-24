import React from 'react';

class StatefullApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vinh',
    };
  }

  render() {
    const { name } = this.state;

    return <h2>{name}</h2>;
  }
}

export default StatefullApp;
