
import React,{Component} from 'react' 
import "./styles.css";
import UserGreeting from './components/UserGreeting'


class App extends Component{
  render(){
    return (
      <div className="App">
      <UserGreeting />
      </div>
    );
  }
}
export default App;