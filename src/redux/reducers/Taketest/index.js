

const initialState = {
    activeQuestion: 0,
    gender: undefined,
    age: undefined,
    questionlist: [

        {
            id:0,
            image: "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
            ans: 5,
            candidateAns:0,
            options: [
                {
                    questionId:0,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg"
                },
                {
                    questionId:0,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg"
                },
                {
                    questionId:0,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg"
                },
                {
                    questionId:0,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg"
                },
                {
                    questionId:0,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg"
                },
                {
                    questionId:0,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg"
                }
            ]
        },
        {
            id: 1,
            image: "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
            ans: 3,
            candidateAns: 0,
            options: [
                {
                    questionId: 1,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg"
                },
                {
                    questionId: 1,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg"
                },
                {
                    questionId: 1,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg"
                },
                {
                    questionId: 1,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg"
                },
                {
                    questionId: 1,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg"
                },
                {
                    questionId: 1,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg"
                }
            ]
        },
        {
            id: 2,
            image: "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
            ans: 5,
            candidateAns: 0,
            options: [
                {
                    questionId: 2,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg"
                },
                {
                    questionId: 2,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg"
                },
                {
                    questionId: 2,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg"
                },
                {
                    questionId: 2,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg"
                },
                {
                    questionId: 2,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg"
                },
                {
                    questionId: 2,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg"
                }
            ]
        },
        {
            id: 3,
            image: "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
            ans: 6,
            candidateAns: 0,
            options: [
                {
                    questionId: 3,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg"
                },
                {
                    questionId: 3,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg"
                },
                {
                    questionId: 3,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg"
                },
                {
                    questionId: 3,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg"
                },
                {
                    questionId: 3,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg"
                },
                {
                    questionId: 3,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg"
                }
            ]
        },
        {
            id: 4,
            image: "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
            ans: 4,
            candidateAns: 0,
            options: [
                {
                    questionId: 4,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg"
                },
                {
                    questionId: 4,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg"
                },
                {
                    questionId: 4,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg"
                },
                {
                    questionId: 4,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg"
                },
                {
                    questionId: 4,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg"
                },
                {
                    questionId: 4,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg"
                }
            ]
        },
        {
            id: 5,
            image: "https://en.testometrika.com/upload/questions/a81/a81ad1de8cfdbb5d180ea3fd50a3bacc.svg",
            ans: 5,
            candidateAns: 0,
            options: [
                {
                    questionId: 5,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/99f/99f5c77985a1b200e9141fdd2ccf7b2d.svg"
                },
                {
                    questionId: 5,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/071/0713aa121f002ad9bc4ae153eeb8e39d.svg"
                },
                {
                    questionId: 5,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/67d/67d393aef6640deb3010b31f3b9cc95f.svg"
                },
                {
                    questionId: 5,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/be5/be506b556903eb28735313c3f34c3e34.svg"
                },
                {
                    questionId: 5,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/fea/feae0c9007450070ab504d2a9d250d5d.svg"
                },
                {
                    questionId: 5,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/60d/60d396000687765f149079a2effb9e82.svg"
                }
            ]
        },
        {
            id: 6,
            image: "https://en.testometrika.com/upload/questions/a84/a840c4e1d62823491d4fa2e03730cfe1.svg",
            ans: 6,
            candidateAns: 0,
            options: [
                {
                    questionId: 6,
                    id: 1,
                    img: "https://en.testometrika.com/upload/answers/ad4/ad4b821d3e138226e71ba2cb4f264eef.svg"
                },
                {
                    questionId: 6,
                    id: 2,
                    img: "https://en.testometrika.com/upload/answers/fcd/fcdcdb73eda8bb8fa0e0a41ce823aa0f.svg"
                },
                {
                    questionId: 6,
                    id: 3,
                    img: "https://en.testometrika.com/upload/answers/ff2/ff2627f18be55c1b49bae14010c04251.svg"
                },
                {
                    questionId: 6,
                    id: 4,
                    img: "https://en.testometrika.com/upload/answers/782/7825e330fe924d2a57f0707552dc5253.svg"
                },
                {
                    questionId: 6,
                    id: 5,
                    img: "https://en.testometrika.com/upload/answers/4b0/4b0e932a6a92559edb7de27143b0f630.svg"
                },
                {
                    questionId: 6,
                    id: 6,
                    img: "https://en.testometrika.com/upload/answers/4a5/4a5c07bab54b36da281e942add14f6e3.svg"
                }
            ]
        },
    ]
}

export const TakeTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ANSWER_OF_THE_QUESTION":
            for(let question of  state.questionlist){
                if (question.id === state.activeQuestion) {
                    question.candidateAns = action.ansByCan
                    break
                }
            }
            return { ...state, activeQuestion: ++state.activeQuestion };
        case "SELECT_AGE":
            return { ...state, activeQuestion: ++state.activeQuestion, age: action.age };
        case "SELECT_GENDER":
            return { ...state, activeQuestion: ++state.activeQuestion, gender: action.gender };
        case "GO_TO_PRE_QUESTION":
            return { ...state, activeQuestion: state.activeQuestion - 1, gender: action.gender };
        case "RETEST":
            return { ...state, activeQuestion: 0 };
        default: return state
    }
}
