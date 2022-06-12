import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

interface CustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: boolean;
    outlined?: boolean;
    fluid?: boolean;
}

export const Button: FC<PropsWithChildren<CustomProps>> = ({
    icon,
    outlined,
    fluid,
    children,
    ...rest
}) => {
    const buttonClassName = [
        styles['button'],
        icon ? styles['button--icon'] : '',
        outlined ? styles['button--outlined'] : '',
        fluid ? styles['button--fluid'] : '',
        rest.className || '',
    ].join(' ');

    return (
        <button {...rest} className={buttonClassName}>
            {children}
        </button>
    );
};
