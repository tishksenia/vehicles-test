import { FC, PropsWithChildren } from 'react';

import styles from './vehicle-property.module.scss';

interface Props {
    title: string;
}

export const VehicleProperty: FC<PropsWithChildren<Props>> = ({
    title,
    children,
}) => {
    return (
        <div className={styles['vehicle-property']}>
            <span className={styles.title}>{title}:</span>
            <span className={styles.value}>{children || '-'}</span>
        </div>
    );
};
