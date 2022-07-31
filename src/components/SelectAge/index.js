import { useDispatch } from 'react-redux'

const SelectAge = ({ activeQuestion }) => {
    const dispatch = useDispatch()

    const checkAns = (age) => {
        dispatch({ type: 'SELECT_AGE', age })
    }

    return (
        <div className="flex flex-col jutify-center items-center">
            <div className="my-4 text-center">
                <p className="text-[2em] text-white">
                    {activeQuestion}. How old are you?
                </p>
            </div>
            <div className="flex items-center">
                {
                    [7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => {
                        return (
                            <button onClick={() => { checkAns(item) }} key={item} className='text-[1.8em] text-white hover:blur-[0.8px] mr-8'>
                              {item}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectAge;
