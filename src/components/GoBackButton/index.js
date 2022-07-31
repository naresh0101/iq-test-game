import { useDispatch } from "react-redux";

const GobackButton = ({ activeQuestion }) => {
    const dispatch = useDispatch()

    const Goback = () => {
        dispatch({ type: 'GO_TO_PRE_QUESTION', activeQuestion: activeQuestion - 1 })
    }

    return (
        <button onClick={Goback} className="bg-[#5a5c9c] px-8 py-4 mt-4 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <img src="https://en.testometrika.com/upload/static/arrow_left.svg" alt="back button" className="h-4" />
        </button>
    )
}

export default GobackButton;