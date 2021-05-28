import {Canvas} from '@react-three/fiber'
import {Box} from "../Components/Box";
import {Environment} from "@react-three/drei";
import React, {Suspense} from "react";
import {Loader} from "../Components/Loader/Loader";

/**
 *
 *
 * @constructor
 * @param {}
 */
export default function Index() {
    return (
        <Suspense fallback={<Loader />}>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
                <Box position={[0, 0, 0]}/>
                <Environment preset="sunset" background/>
            </Canvas>
        </Suspense>
    )

}
