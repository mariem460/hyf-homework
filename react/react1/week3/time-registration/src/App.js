import logo from './logo.svg';
import './App.css';
import SubmitShift from './SubmitShift';
import ShiftOverview from './ShiftOverview';


function App() {
  return (
    <div className="App">
      <SubmitShift/> 
      <div className='shiftsList'>
      <ShiftOverview />

      </div>
      

    </div>
  );
}

export default App;
