import { useDispatch, useSelector } from "react-redux";
import CloseTestAndLevelNo from "../../components/CloseTestAndLevelNo";
import Question from "../../components/Question";
import SelectAge from "../../components/SelectAge";
import SelectGender from "../../components/SelectGender";

const TakeTestLayout = () => {
    const dispatch = useDispatch()

    let TakeTestReducer = useSelector((state) => state?.TakeTestReducer)
    const { questionlist, activeQuestion } = TakeTestReducer

    const Goback = () => {
        dispatch({ type: 'GO_TO_PRE_QUESTION', activeQuestion:activeQuestion-1 })
    }

    return (
        <div className="bg-[#6b6fbc] p-4 flex flex-col justify-between full-height">
            <CloseTestAndLevelNo activeQuestion={activeQuestion} />
            <div className="flex justify-center w-full">
                <div className="container lg:w-4/6 mx-auto">
                    {activeQuestion <= 6 && <Question questionlist={questionlist}
                        activeQuestion={activeQuestion} />}
                    {activeQuestion === 7 && <SelectAge activeQuestion={activeQuestion} />}
                    {activeQuestion === 8 && <SelectGender activeQuestion={activeQuestion} />}
                    {activeQuestion > 0 && <button onClick={Goback} className="bg-[#5a5c9c] px-8 py-4 mt-4 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img src="https://en.testometrika.com/upload/static/arrow_left.svg" className="h-4" />
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default TakeTestLayout;