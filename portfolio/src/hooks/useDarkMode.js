import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    return [value, setValue]
};

// update after component positions and basic styles are set
