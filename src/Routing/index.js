import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TakeTestPage from '../page/TakeTest';

const Routing = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TakeTestPage />} />
                    <Route path="/take-test" element={<TakeTestPage />} />
                </Routes>
            </BrowserRouter>
    )
}
export default Routing;