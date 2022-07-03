import logo from './logo.svg';
import './App.css';
//import { fakeNames } from './fakeName';
import { FilteredList } from './FilterList';

function App() {
  let fakeNames =["Ashlee Goldner DVM",
    "Mrs. Marcus Kihn",
    "Dewayne Heidenreich",
    "Annie Wuckert",
    "Finn Dooley",
    "Turner Goodwin",
    "Mrs. Eliseo Adams",
    "Addie Bradtke",
    "Leonora Krajcik",
    "Santiago Littel"]

  return (
    <div className="App">
      <h1>Search with debounce</h1>
      <FilteredList names={fakeNames}/>
    </div>
  );
}

export default App;
