import { useDispatch } from "react-redux";

const ResultHeader = () => {
    const dispatch = useDispatch()
    const retest = ()=>{
        dispatch({ type: 'RETEST' })
    }
    return (
        <div className="py-8 bg-[#6b6fbc] p-4 flex flex-col items-center">
            <div className="my-4 text-center">
                <p className="text-[1.8em] text-white">
                    IQ Test for kids from 7 to 16 year old
                </p>
            </div>
            <div>
                <button onClick={retest} className="p-3 font-[500px] text-white rounded text-[1.2em] bg-[#5a5c9c] w-auto">
                    Take the test
                </button>
            </div>
        </div>
    )
}

export default ResultHeader;