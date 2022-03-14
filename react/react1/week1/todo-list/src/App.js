import { ListToDo } from './ListToDo';
import './App.css';

const thingsToDo = [
  {
    id: 1,
    description: "Get out of bed",
    date: "Thu Sep 14 2017",
  },
  {  id: 2,
    description: "Brush teeth",
    date: "Wed Sep 13 2017",
  },
  {  id: 3,
    description: "Eat breakfast",
    date: "Fri Sep 15 2017",
  },
  {  id: 4,
    description: "go to cinemax",
    date: "Sat Sep 16 2017",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Welcome to my To Do List</h1>
      <ListToDo hellou = {thingsToDo}/>
      
    </div>
  );
}

export default App;
