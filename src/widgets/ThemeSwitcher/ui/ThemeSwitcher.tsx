import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, UseTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThereSwitcherProps {
    className?: string,
}
export const ThemeSwitcher = ({ className }: ThereSwitcherProps) => {
    const { theme, toggleTheme } = UseTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
