import React, { forwardRef, HTMLProps } from 'react';
import { Label } from '../Label';

import styles from './input.module.scss';

interface CustomProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    error?: boolean | string;
}

export const Input = forwardRef<HTMLInputElement, CustomProps>(
    ({ label, error, className, ...rest }, ref) => {
        const inputClassName = [
            styles['input'],
            error ? styles['input--error'] : '',
        ].join(' ');

        return (
            <div className={styles['wrapper']}>
                <Label>
                    <span>{label}</span>
                    <input ref={ref} {...rest} className={inputClassName} />
                    {error && (
                        <span className={styles['input--error']}>{error}</span>
                    )}
                </Label>
            </div>
        );
    }
);
