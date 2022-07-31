import { Fragment } from "react";
import {  useSelector } from "react-redux";
import CloseTestAndLevelNo from "../../components/CloseTestAndLevelNo";
import GobackButton from "../../components/GoBackButton";
import Question from "../../components/Question";
import SelectAge from "../../components/SelectAge";
import SelectGender from "../../components/SelectGender";
import ResultLayout from "../ResultLayout";

const TakeTestLayout = () => {
    let TakeTestReducer = useSelector((state) => state?.TakeTestReducer)
    const { questionlist, activeQuestion } = TakeTestReducer
  
    return (
        <Fragment>
            {
                activeQuestion === 9 ? <ResultLayout /> : <div className="bg-[#6b6fbc] p-4 flex flex-col justify-between full-height">
                    <CloseTestAndLevelNo activeQuestion={activeQuestion} />
                    <div className="flex justify-center w-full">
                        <div className="container lg:w-4/6 mx-auto">
                            {activeQuestion <= 6 && <Question questionlist={questionlist}
                                activeQuestion={activeQuestion} />}
                            {activeQuestion === 7 && <SelectAge activeQuestion={activeQuestion} />}
                            {activeQuestion === 8 && <SelectGender activeQuestion={activeQuestion} />}
                            {activeQuestion > 0 && <GobackButton activeQuestion={activeQuestion} />}
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default TakeTestLayout;