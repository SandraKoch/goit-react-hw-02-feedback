import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <ul>
          <li>Good : {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>A total of {total} customers' feedbacks were left</li>
          <li>Positive feedback: {positivePercentage}</li>
        </ul>
      </>
    );
  }
}
