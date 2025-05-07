import { useEffect, useRef, useState } from "react";

export const usePrev = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current; // Initail it show :: Undefined
    // it return first, effect gets caller later
}