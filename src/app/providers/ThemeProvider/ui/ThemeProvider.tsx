import {
    FC, PropsWithChildren, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '@/app/providers/ThemeProvider/lib/theme.context';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps extends PropsWithChildren {
    initialTheme?: Theme
}
const ThemeProvider: FC<ThemeProviderProps> = props => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
