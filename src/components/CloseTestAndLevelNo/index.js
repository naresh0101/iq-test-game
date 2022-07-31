
const CloseTestAndLevelNo = ({ activeQuestion }) => {

    return (
        <div className="flex justify-between items-center">
            <h1 className="sm:text-[2.2em]">
                <span className="text-[#494e84]">{activeQuestion}</span><span className="text-white">/8</span>
            </h1>
            <button className="rounded">
                <span>
                    <img className="h-6 opacity-[0.3]" src="https://en.testometrika.com/upload/static/close.svg" />
                </span>
            </button>
        </div>
    )
}

export default CloseTestAndLevelNo;