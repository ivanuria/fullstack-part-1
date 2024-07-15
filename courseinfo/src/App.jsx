const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  );
}

const Content = (props) => {
  const final = [];
  props.parts.forEach((part, index) => final.push(<Part key={index} part={part} />));
  console.log(final);
  return (final);
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.map(part => part.exercises).reduce((a, b) => a + b)} /> 
    </div>
  ); // WTH does math.sum does not exist here?
}

export default App
