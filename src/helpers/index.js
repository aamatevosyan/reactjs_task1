import {useEffect, useRef} from "react";

import bloop_path from "../assets/audio/bloop.mp3";
export const bloopAudio = new Audio(bloop_path);

export const generateRenderData = (data, maxCount) => {
    const clonedData = copyArray(data);
    return clonedData.map(colors => {
        if (colors.length < maxCount) {
            while (colors.length !== maxCount) colors.push('');
        }

        return colors;
    });
}

export const copyArray = (arr) => {
    return arr.map(value => [...value]);
}

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}