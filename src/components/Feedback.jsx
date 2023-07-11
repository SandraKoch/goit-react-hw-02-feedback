import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FeedbackComponent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStats = score => {
    this.setState(prevState => ({
      ...prevState,
      [score]: prevState[score] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedback = () => {
    const allAnswers = this.state.good + this.state.neutral + this.state.bad;
    return allAnswers
      ? `${((this.state.good / allAnswers) * 100).toFixed(0)}%`
      : `0%`;
  };

  render() {
    return (
      <div>
        <h1>Did you enjoy your coffee at Expresso?</h1>
        <h2>Please leave your feedback</h2>
        <ul>
          <li>
            <button onClick={() => this.addStats('good')}>Good</button>
          </li>
          <li>
            <button onClick={() => this.addStats('neutral')}>Neutral</button>
          </li>
          <li>
            <button onClick={() => this.addStats('bad')}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good : {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>
            A total of {this.countTotalFeedback()} customers' feedbacks were
            left
          </li>
          <li>Positive feedback: {this.countPositiveFeedback()}</li>
        </ul>
      </div>
    );
  }
}

export default FeedbackComponent;
