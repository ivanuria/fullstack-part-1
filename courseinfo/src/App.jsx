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
  // Although it is said that we can avoid the loop, I cannot help myself.
  console.log(final);
  return (final);
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course =  { 
    name: "Half Stack application development",
    parts: [
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
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part => part.exercises).reduce((a, b) => a + b)} /> 
    </div>
  ); // WTH does math.sum not exist here?
}

export default App
