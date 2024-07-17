import { useState } from 'react';
import "./app.css";

const getRandomInt = (max) => Math.floor(Math.random() * max);

const Button = ({innerText, onClick}) => <button onClick={onClick} >{innerText}</button>;

const Anecdote = ({anecdote}) => {
  return (
    <figure>
      <blockquote>{anecdote["anecdote"]}</blockquote>
      <figcaption>by {anecdote["author"]}</figcaption>
    </figure>
  );
}

const TotalVotes = ({votes}) => <p><b>Total votes</b>: {votes}</p>;

const App = () => {
  const anecdotes = [
    {
      "anecdote": "Adding manpower to a late software project makes it later!", 
      "author": "Brooks Law"
    },
    {
      "anecdote": "The best way to get a project done faster is to start sooner", 
      "author": "Jim Highsmith"
    },
    {
      "anecdote": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", 
      "author": "Tom Cargill"
    },
    {
      "anecdote": "Even the best planning is not so omniscient as to get it right the first time.", 
      "author": "Fred Brooks"
    },
    {
      "anecdote": "How does a project get to be a year late?... One day at a time.", 
      "author": "Fred Brooks"
    },
    {
      "anecdote": "The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.", 
      "author": "Fred Brooks"
    },
    {
      "anecdote": "Plan to throw one (implementation) away; you will, anyhow.", 
      "author": "Fred Brooks"
    },
    {
      "anecdote": "Every good work of software starts by scratching a developer's personal itch", 
      "author": "Raymond"
    },
    {
      "anecdote": "Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away", 
      "author": "Antoine de Saint-Exupery"
    },
    {
      "anecdote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 
      "author": "Martin Fowler"
    }
  ];

  const [selected, setSelected] = useState(getRandomInt(10));
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

  console.log("Points: ", points);

  const vote = () => {
    const pointsCopy = {...points};
    pointsCopy[selected]++;
    setPoints(pointsCopy);
  }

  const getMostVoted = () => {
    const keys = [...Object.keys(points)];
    const max = Math.max(...Object.values(points));
    console.log("Keys: ", keys);
    console.log("MAX: ", max);
    return keys.filter(key => points[key] == max)[0];
  }
  
  console.log("MostVoted: ", getMostVoted());

  return (
    <main className="anecdotes">
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <TotalVotes votes={points[selected]} />
      <Button onClick={() => setSelected(getRandomInt(anecdotes.length))} innerText="Get a random anecdote" />
      <Button onClick={vote} innerText="Vote for anecdote" />
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[getMostVoted()]} />
    </main>
  );
}

export default App
