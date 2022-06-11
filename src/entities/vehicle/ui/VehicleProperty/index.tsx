import { FC } from 'react';

import styles from './vehicle-property.module.scss';

interface Props {
    title: string;
    // assuming that sometimes value can be falsy
    value?: string;
}

export const VehicleProperty: FC<Props> = ({ title, value }) => {
    return (
        <div className={styles['vehicle-property']}>
            <span className={styles.title}>{title}:</span>
            <span className={styles.value}>{value || '-'}</span>
        </div>
    );
};
