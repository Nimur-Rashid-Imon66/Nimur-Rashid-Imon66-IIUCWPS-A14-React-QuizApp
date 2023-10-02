import { useState } from 'react';
import { QuizData } from './QsnData';
import Score from './Score.jsx';
import Question from './Question.jsx';
// import Question from './Question.jsx';

function Quiz() {
    const btnStyle = "bg-cyan-400 py-2 px-4 rounded-lg hover:bg-cyan-500 font-medium";
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [clickOption, setClickOptions] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const showScore = () => {
        updateScore();
        alert("You have successfully completed all task");
        setShowResult(true);
    };
    function updateScore() {
        if (clickOption === QuizData[currentQuestion].answer) setCurrentScore(currentScore + 1);
        
    }
    const showNext = () => {
        
        updateScore();
        setCurrentQuestion(currentQuestion + 1);
        setClickOptions(0);
    }; 
    
    // console.log(x);
    return <div className="">
        {showResult ? <Score score={currentScore} total={QuizData.length} /> :
            <>
                <Question qsnNum={currentQuestion} />
             {/* Option */}
            <div className="text-lg grid grid-row-2 gap-3 items-center pt-3">
            {
                QuizData[currentQuestion].Option.map((option, i) => {
                    return <span className={`
                    ${clickOption === i+1 ? "bg-blue-400" : "bg-blue-200 hover:bg-blue-300"} rounded px-2 py-1 `} key={i} onClick={() => { setClickOptions(i + 1); }}>{option}</span>
                })    
            }
                
        </div>
        
        <div className="flex items-center justify-around pt-4">
            {         
                currentQuestion !== (QuizData.length-1) ? <button className={btnStyle} onClick={showNext}>Next</button> : <button className={btnStyle} onClick={showScore}>Submit</button>
            }
        </div></>}
        
        

    </div>
}
export default Quiz;