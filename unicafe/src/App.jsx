import { useState } from 'react';

import './app.css';

const setFeedback = (newValue, setter)  => {
  return () => setter(newValue);
}

const Button = ({innerText, onClick, className=""})  => <button className={className} onClick={onClick}>{innerText}</button>;

const StatisticsLine = ({name, value}) => {
  return (
    <tr>
      <th>{name}</th> 
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad;
  if (all > 0) {
    let average = (good - bad) / all;
    if (isNaN(average)) average = 0;
    let positive = 100 * good / all;
    if (isNaN(positive)) positive = 0;

    return (
      <table className="statistics">
        <tbody>
          <StatisticsLine name="Good" value={good} />
          <StatisticsLine name="Neutral" value={neutral} />
          <StatisticsLine name="Bad" value={bad} />
          <StatisticsLine name="All" value={all} />
          <StatisticsLine name="Average" value={average} />
          <StatisticsLine name="Positive" value={`${positive} %`} />
        </tbody>
      </table>
    );
  }
  return <p class="statistics-no-feedback"><b>No feedback given yet. We are longing for your opinion.</b></p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  console.log("GOOD: ", good);
  console.log("NEUTRAL: ", neutral);
  console.log("BAD: ", bad);

  return (
    <main className="unicafe-app">
      <h1 className="title">We are craving for your feedback</h1>
      <p className="subtitle">Please, press one of the following buttons reflecting your experience in <b>Unicafe</b></p>
      <div className="buttons">
        <Button className="feedback-button -good" onClick={setFeedback(good + 1, setGood)} innerText="GOOD"/>
        <Button className="feedback-button -neutral" onClick={setFeedback(neutral + 1, setNeutral)} innerText="NEUTRAL"/>
        <Button className="feedback-button -bad" onClick={setFeedback(bad + 1, setBad)} innerText="BAD"/>
      </div>
      <h2 className="statistics-title">Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
}

export default App;
