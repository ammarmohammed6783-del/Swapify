import { useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('light'); // default to light

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}