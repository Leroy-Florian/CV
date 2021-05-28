import './App.css';
import Index from "./View/Index";
import React from "react";
import GlobalLayout from "./Layout/GlobalLayout/GlobalLayout";
import {Environment} from "@react-three/drei";


function App() {
    return (
            <GlobalLayout>
                <Index/>
            </GlobalLayout>
    );
}

export default App;
