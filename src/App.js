import logo from './logo.svg';
import './App.css';

import ChildrenList from './componets/ChildrenList';
import ComplexGrid from './componets/testGrid';
import CardChild from './componets/CardChild';
function App() {
  return (
    <div className="App">
      <CardChild/>
      <ChildrenList/>
    </div>
  );
}

export default App;
