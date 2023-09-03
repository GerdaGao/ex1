//creat question component
import Options from "./Options";
const Question = ({ question, options }) => {
return (
<div className='question'>
    <h1>{question}</h1>
    {options.map((option, index) => (<Option key={index} option={option} />))}   
    </div>);

};
export default Question;