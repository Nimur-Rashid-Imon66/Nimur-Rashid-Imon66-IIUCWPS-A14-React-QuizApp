import { QuizData } from './QsnData';

function Question(props) {
    const qsn = props.qsnNum;
    return <> <p className=" text-xl text-center py-2 rounded bg-blue-50 font-semibold  text-black">   {qsn + 1}. {QuizData[qsn].Q}</p> </>
}

export default Question;