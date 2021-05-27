import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light")
        } else {
            setMode("dark")
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

export default useDarkMode;