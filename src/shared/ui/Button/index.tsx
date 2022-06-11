import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

interface CustomProps {
    icon?: boolean;
    outlined?: boolean;
    fluid?: boolean;
}

export const Button: FC<
    PropsWithChildren<CustomProps> & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ icon, outlined, fluid, children, ...rest }) => {
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
