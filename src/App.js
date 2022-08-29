// import logo from './logo.svg';
import './App.css';
// import Users from './Users';
// import Apple from './Users';
// import {User1} from './Users'
// import NewUser from './NewUser'
import Greet from './component/Greet';
import Hello from './component/Hello';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <Users></Users>  
      <User1></User1>
      <NewUser></NewUser>
      <Apple></Apple> */}
      <Greet></Greet>
      <Hello/>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
