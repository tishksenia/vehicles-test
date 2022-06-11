import { FC, HTMLProps, PropsWithChildren, ReactNode } from 'react';

import styles from './form-container.module.scss';

interface Props extends HTMLProps<HTMLFormElement> {
    actions: ReactNode;
}

export const FormContainer: FC<PropsWithChildren<Props>> = ({
    actions,
    children,
    ...rest
}) => {
    return (
        <form {...rest} className={styles['form']}>
            {children}
            <div className={styles['actions']}>{actions}</div>
        </form>
    );
};
