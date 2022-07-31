

import { Provider } from "react-redux";
import store from "./redux/store"
import './index.css'
import Routing from "./Routing";

const App = () => {

    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    )
}
export default App;