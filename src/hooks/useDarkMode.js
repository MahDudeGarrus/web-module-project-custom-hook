import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage( 'dark mode', key);

    return [darkMode, setDarkMode];
}