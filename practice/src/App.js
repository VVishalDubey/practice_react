import { Link } from "react-router-dom" ;
import './App.css';
import { useEffect} from "react" ;

 function App() {
  useEffect(() => {
    console.log("PW Skills");
  }, []);

  return (
    <div className="App">
    <header className="App-header">
     <nav>
     <ul>
     <Link to="https://google.com//">
      <li>Home</li>
      </Link>
      <Link to="/about">
      <li>About</li>
      </Link>
      

     </ul>

     </nav>
     </header>
    </div>
  );
}

export default App;
