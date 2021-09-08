import './App.css';
import LoginButton from './Components/Login/login';
import LogoutButton from './Components/Logout/Logout';


function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
