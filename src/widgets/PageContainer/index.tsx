import React, { FC, PropsWithChildren } from 'react';

import styles from './page-container.module.scss';

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles['page-container']}>{children}</div>;
};
