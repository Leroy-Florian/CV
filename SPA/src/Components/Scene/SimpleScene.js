import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

export default function SimpleScene() {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};
