import { useDispatch } from 'react-redux'

const Question = ({ questionlist, activeQuestion }) => {
    const dispatch = useDispatch()

    const checkAns = (ansByCan, questionId) => {
        dispatch({ type: 'ANSWER_OF_THE_QUESTION', ansByCan, questionId })
    }

    return (
        <div className="flex flex-col jutify-center items-center">
            <img className="h-28" src={questionlist[activeQuestion]?.image} alt="question one 1" />
            <div className="my-4 text-center">
                <p className="text-[2em] text-white">
                    {activeQuestion}. Which shape should be in the rightmost cell with a question mark?
                </p>
            </div>
            <div className="flex items-center">
                {
                    questionlist[activeQuestion]?.options?.map((item) => {
                        return (
                            <button onClick={() => { checkAns(item?.id, item?.questionId) }} key={item?.id} className='hover:blur-[0.8px] mr-8'>
                                <img className="h-28" src={item?.img} alt="question one 1" />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question;
