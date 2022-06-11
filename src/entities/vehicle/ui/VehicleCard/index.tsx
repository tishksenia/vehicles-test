import { FC } from 'react';
import { Button, getCSSVariableValue, TrashIcon } from 'shared';
import { Vehicle } from '../../model/types';
import { VehicleProperty } from '../VehicleProperty';

import styles from './vehicle-card.module.scss';

interface Props {
    vehicle: Vehicle;
}

export const VehicleCard: FC<Props> = ({ vehicle }) => {
    return (
        <div className={styles['vehicle-card']}>
            <div>
                <div className={styles['header']}>
                    <VehicleProperty title="ID" value={vehicle.id} />
                    <VehicleProperty title="Name" value={vehicle.name} />
                </div>
                <VehicleProperty title="Driver" value={vehicle.driver} />
                <VehicleProperty title="Status" value={vehicle.status} />
                <VehicleProperty title="Fuel Type" value={vehicle.fuelType} />
            </div>
            <div className={styles.controls}>
                <Button outlined>Edit</Button>
                <Button outlined>
                    <TrashIcon color={getCSSVariableValue('--accent-color')} />
                </Button>
            </div>
        </div>
    );
};
