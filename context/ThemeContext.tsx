import React, {useCallback, useContext, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {
    Provider as PaperProvider,
    MD3DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
    NavigationContainer,
    Theme as NavigationTheme,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {ThemeBase as PaperTheme} from 'react-native-paper/lib/typescript/types';

export type Theme = NavigationTheme &
    PaperTheme & {
};

const lightTheme: Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        primary: "#488c08",
        card: "#488c08",
        border: "#488c08",
        notification: "#488c08",

    },
};

const darkTheme: Theme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        primary: "#e8d506",
        background: "#fff100",
        text: "#000000",
        notification: "#fff100",
    },
};

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue {
    theme: Theme;
    themeType: ThemeType;
    isDarkTheme: boolean;
    toggleThemeType: () => void;
    setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    theme: lightTheme,
    themeType: 'light',
    isDarkTheme: false,
    setThemeType: () => {
    },
    toggleThemeType: () => {
    },
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const colorScheme = useColorScheme();
    const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

    const toggleThemeType = useCallback(() => {
        setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);
    const theme = useMemo(
        () => (isDarkTheme ? darkTheme : lightTheme),
        [isDarkTheme],
    );

    return (
        <NavigationContainer theme={theme}>
            <PaperProvider theme={theme}>
                <ThemeContext.Provider
                    value={{
                        theme,
                        themeType,
                        isDarkTheme,
                        setThemeType,
                        toggleThemeType,
                    }}>
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>
        </NavigationContainer>
    );
};
