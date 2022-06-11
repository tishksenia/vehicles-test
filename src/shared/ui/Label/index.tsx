import React, { FC, PropsWithChildren } from 'react';

import styles from './label.module.scss';

export const Label: FC<PropsWithChildren> = ({ children }) => {
    return <label className={styles.label}>{children}</label>;
};
