import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Components/Login/login';
import LogoutButton from './Components/Logout/Logout';
import { Profile } from './Components/Porfile/porfile';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
    <header className="App">
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  </div>
  );
}

export default App;
