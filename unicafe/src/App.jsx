import { useState } from 'react';

const setFeedback = (newValue, setter)  => {
  return () => setter(newValue);
}

const Button = ({innerText, onClick, className=""})  => <button className={className} onClick={onClick}>{innerText}</button>;

const StatisticsLine = ({name, value}) => <span><b>{name}</b>: {value}</span>;

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad;
  if (all > 0) {
    let average = (good - bad) / all;
    if (isNaN(average)) average = 0;
    let positive = 100 * good / all;
    if (isNaN(positive)) positive = 0;

    return (
      <ul className="statistics">
        <li><StatisticsLine name="Good" value={good} /></li>
        <li><StatisticsLine name="Neutral" value={neutral} /></li>
        <li><StatisticsLine name="Bad" value={bad} /></li>
        <li><StatisticsLine name="All" value={all} /></li>
        <li><StatisticsLine name="Average" value={average} /></li>
        <li><StatisticsLine name="Positive" value={`${positive} %`} /></li>
      </ul>
    );
  }
  return <p><b>No feedback given yet. We are longing for your opinion.</b></p>
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
      <h1>We are craving for your feedback</h1>
      <p>Please, press one of the following buttons reflecting your experience in <b>Unicafe</b></p>
      <div className="buttons">
        <Button onClick={setFeedback(good + 1, setGood)} innerText="GOOD"/>
        <Button onClick={setFeedback(neutral + 1, setNeutral)} innerText="NEUTRAL"/>
        <Button onClick={setFeedback(bad + 1, setBad)} innerText="BAD"/>
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
}

export default App;
