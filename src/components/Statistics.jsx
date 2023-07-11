import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    // const { text, count } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <h2>Count: {count}</h2>
      </div>
    );
  }
}

export default Statistics;
