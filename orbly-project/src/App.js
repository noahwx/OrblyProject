import './index.css';
import Main from './components/Main';
import Favicon from "react-favicon";
import logo from './logo.svg';

// Version 0.4.000

function App() {
  return (
    <>
      <Favicon url={logo}/>
      <Main />
      <footer>Orbly. © 2023</footer>
    </>
  );
}

export default App;
