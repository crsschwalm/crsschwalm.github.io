import React from "react";


const MOBILE_BREAKPOINT = 630
export const useIsMobile = (initialValue = null) => {
    const [isMobileView, setIsMobileView] = React.useState(initialValue);

    const handleResize = () => {
        const isSmallViewport = window.innerWidth <= MOBILE_BREAKPOINT;

        return setIsMobileView(isSmallViewport);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        setTimeout(() => {
            handleResize(); //call handleResize after render
        }, 100);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobileView;
};