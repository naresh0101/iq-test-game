import { useMemo } from "react";
import { useSelector } from "react-redux";
import AboutIQAPP from "../AboutIQAPP";

const Result = () => {
    let TakeTestReducer = useSelector((state) => state?.TakeTestReducer)
    const { questionlist, age } = TakeTestReducer

    let getTotalCurrent = useMemo(()=>{
        return questionlist.reduce((acc,cur)=>{
            if(cur?.id !== 0 && cur?.candidateAns === cur?.ans){
                acc++
            }
            return acc
        },0)
    },[questionlist])

    let getIq = useMemo(()=>{
        let totalQuestion = 7
        // get total IQ 
        let totalIq = (age/16)*100
        let currentAns = questionlist.reduce((acc,cur)=>{
            if(cur?.id !== 0 &&  cur?.candidateAns === cur?.ans){
                acc++
            }
            return acc
        },0)
        
        let finalIQ = (totalIq/totalQuestion)*currentAns
        return Math.floor(finalIQ)
    },[questionlist,age])

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <AboutIQAPP />
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="text-[#5e5e73] font-normal">
                        <div className="mb-2 text-[1.2em]"><p className="font-bold">Your result:</p></div>
                        <div className="mb-2"><p> Age {age}</p></div>
                        <div className="mb-2"><p>
                            <span className="font-bold">
                                Your IQ is {getIq}.
                            </span> This corresponds to an above average level IQ. In this test you have <span className="font-bold">{getTotalCurrent} correct answers from 6</span>. You have given your best. 
                        </p></div>
                        <div className="mb-2">
                            <p>
                                Please note that the first questions of the test was only the practice questions and they do not count towards the final result.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;