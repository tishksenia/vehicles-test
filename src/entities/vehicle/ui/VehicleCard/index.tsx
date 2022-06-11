import { FC } from 'react';

import { Button } from 'shared';
import { RemoveVehicle } from 'features/RemoveVehicle';

import { Vehicle } from '../../model/types';
import { VehicleProperty } from '../VehicleProperty';
import { StatusProperty } from '../StatusProperty';

import styles from './vehicle-card.module.scss';

interface Props {
    vehicle: Vehicle;
}

export const VehicleCard: FC<Props> = ({ vehicle }) => {
    return (
        <div className={styles['vehicle-card']}>
            <div>
                <div className={styles['header']}>
                    <VehicleProperty title="ID">{vehicle.id}</VehicleProperty>
                    <VehicleProperty title="Name">
                        {vehicle.name}
                    </VehicleProperty>
                </div>
                <VehicleProperty title="Driver">
                    {vehicle.driver}
                </VehicleProperty>
                <VehicleProperty title="Status">
                    <StatusProperty status={vehicle.status} />
                </VehicleProperty>
                <VehicleProperty title="Fuel Type">
                    {vehicle.fuelType}
                </VehicleProperty>
            </div>
            <div className={styles.controls}>
                <Button outlined>Edit</Button>
                <RemoveVehicle id={vehicle.id} />
            </div>
        </div>
    );
};
