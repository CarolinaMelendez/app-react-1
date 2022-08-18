import logo from './logo.svg';
import './App.css';

import ChildrenList from './componets/ChildrenList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi theree ¡¡¡
          My name is Carolina :D ,
          Let's try to deploy it
        </p>
        <ChildrenList/>
      </header>
    </div>
  );
}

export default App;
