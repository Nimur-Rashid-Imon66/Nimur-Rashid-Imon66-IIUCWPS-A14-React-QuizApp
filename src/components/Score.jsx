function Score(props) {
    return <>
        <span className="px-2 text-blue-700 font-medium ">Your response has been recorded</span>
        <p className="px-2 py-5  font-bold text-2xl">Your Score : {props.score} <br /> Full Marks : {props.total}</p>
        
    </>
}

export default Score;