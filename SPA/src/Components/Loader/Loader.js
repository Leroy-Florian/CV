import React from "react";
import { useProgress} from "@react-three/drei";

export function Loader() {
    const {active, progress, errors, item, loaded, total} = useProgress();
    return <>{progress} % loaded</>;
}
