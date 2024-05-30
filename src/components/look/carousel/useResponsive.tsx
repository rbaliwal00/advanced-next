import { useState, useCallback, useEffect } from "react";

export const useResponsive = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [screenType, setScreenType] = useState<string>("INITIAL");

    const updateWindowDimensions = useCallback(() => {
        const width = window.innerWidth;
        setWindowWidth(width);
        setWindowHeight(window.innerHeight);

        if (width > 1300) {
            setScreenType("DESKTOP");
        } else if (width <= 1300 && width > 768) {
            setScreenType("TABLET");
        } else {
            setScreenType("MOBILE");
        }
    }, []);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, [updateWindowDimensions]);

    return {
        windowWidth,
        windowHeight,
        screenType
    };
};
