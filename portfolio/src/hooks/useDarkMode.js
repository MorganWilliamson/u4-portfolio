import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [mode, setMode] = useState("lightMode");

    const toggleMode = () => {
        if (mode === "darkMode") {
            setMode("lightMode")
        } else {
            setMode("darkMode")
        }
    }

    useEffect(() => {
        const localMode = localStorage.getItem("mode")
        if (localMode) {
            setMode(localMode)
        }
    }, [])

    return {
        mode, 
        toggleMode
    }
}