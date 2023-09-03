import "./App.css";
import Question from "./Question";
import Options from "./Options";
function App() {

const questionText = "What is the capital of Italy?";
const optionList = ["Turin", "Milan", "Rome"] ; 
  return (<div className="App">
    <Question question={questionText} options={optionList} />


  </div>);
}

export default App;
