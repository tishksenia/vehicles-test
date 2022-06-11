import { FC } from 'react';

import { Vehicle } from 'entities/vehicle/model/types';
import { StatusIcon } from '../StatusIcon';

import styles from './status-property.module.scss';

const mapStatusToColor = {
    active: '#89da59',
    inactive: '#f98866',
};

export const StatusProperty: FC<Pick<Vehicle, 'status'>> = ({ status }) => {
    return (
        <div className={styles['status-property']}>
            <StatusIcon color={mapStatusToColor[status] || 'gray'} />
            {status}
        </div>
    );
};
