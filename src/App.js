import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Yoshi'
  const element1 = <h1>Hello, {name}</h1>

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element2 = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  return (
    <div className="App">
      {element2}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
