import { forwardRef, HTMLProps } from 'react';
import { Label } from '../Label';

import styles from './select.module.scss';

interface Option {
    text: string;
    value: string;
}

interface CustomProps extends HTMLProps<HTMLSelectElement> {
    label?: string;
    error?: boolean | string;
    fluid?: boolean;
    options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, CustomProps>(
    ({ label, error, fluid, options, ...rest }, ref) => {
        const selectClassName = [
            styles['select'],
            fluid ? styles['select--fluid'] : '',
            error ? styles['select--error'] : '',
            rest.className || '',
        ].join(' ');

        return (
            <div className={styles['wrapper']}>
                <Label>
                    <span>{label}</span>
                    <select ref={ref} {...rest} className={selectClassName}>
                        {options.map(({ value, text }, index) => (
                            <option
                                className={styles['option']}
                                value={value}
                                key={index + text}>
                                {text}
                            </option>
                        ))}
                    </select>
                    {error && (
                        <span className={styles['select--error']}>{error}</span>
                    )}
                </Label>
            </div>
        );
    }
);
