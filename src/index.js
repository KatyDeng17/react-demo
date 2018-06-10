import React from "react"; 
import ReactDom from "react-dom"; 

class App extends Component {
  render(){
    return <div> Hello {this.props.name}</div>
  }
}
ReactDOM.render(
  <App name = "Katy"/>,
  document.getElementById("root")
)

