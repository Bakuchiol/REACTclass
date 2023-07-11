// import logo from './logo.svg';
import './App.css';
import students from './models/students';
import ListItem from './components/ListItem';
// import { useState } from 'react';


console.log(students)

function App() {
  // data manipulation goes here
  // use state::
  // const [allStudents, setAllStudents] = useState() //whatever the original form was
  // setAllStudents(...students, {name: "bob"})
  return (
    <div className="App">
      <h1>Classroom</h1>
      <div>
        {students.map((person, index) => {
          // passing down state as props
          // key={index} :: take out error, must need key
          return <ListItem key={index} person={person}/>
        }
        )}
      </div>
    </div>
  );
}

export default App;
