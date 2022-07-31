import { useDispatch } from 'react-redux'

const SelectGender = ({ activeQuestion }) => {
    const dispatch = useDispatch()

    const checkAns = (gender) => {
        dispatch({ type: 'SELECT_GENDER', gender })
    }

    return (
        <div className="flex flex-col jutify-center items-center">
            <div className="my-4 text-center">
                <p className="text-[2em] text-white">
                    {activeQuestion}. What's your gender?
                </p>
            </div>
            <div className="flex items-center">
                {
                    ['Male','Female','Others'].map((item) => {
                        return (
                            <button onClick={() => { checkAns(item) }} key={item} className='text-[1.4em] text-white hover:blur-[0.8px] mr-8'>
                              {item}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectGender;
