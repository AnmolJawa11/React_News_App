import logo from './logo.svg';
import './App.css';
import Frame from './Components/frame'

// huhu
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
function App(props) {
  console.log("props in app : ", props)
  return (
    <div>
      <Router>
            <Frame {...props}>
                <Switch>
                </Switch>
            </Frame>
        </Router>
      
        
        
    </div>
  );
}

export default App;
