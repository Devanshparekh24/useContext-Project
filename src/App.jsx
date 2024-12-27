import UserContextProvider from './contexts/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import "./App.css";



function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Hello world</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
