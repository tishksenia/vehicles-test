import React, { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './page-header.module.scss';

interface Props {
    actions?: ReactNode;
}

export const PageHeader: FC<PropsWithChildren<Props>> = ({
    actions,
    children,
}) => {
    return (
        <div className={styles['page-header']}>
            <div className={styles.title}>{children}</div>
            <div className={styles.actions}>{actions}</div>
        </div>
    );
};
