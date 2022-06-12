import { FC } from 'react';

import { RemoveVehicle } from 'features/RemoveVehicle';
import { EditVehicle } from 'features/EditVehicle';
import { EquipmentList } from 'entities/equipment';

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
                <header className={styles['header']}>
                    <VehicleProperty title="ID">{vehicle.id}</VehicleProperty>
                    <VehicleProperty title="Name">
                        {vehicle.name}
                    </VehicleProperty>
                </header>
                <VehicleProperty title="Driver">
                    {vehicle.driver}
                </VehicleProperty>
                <VehicleProperty title="Status">
                    <StatusProperty status={vehicle.status} />
                </VehicleProperty>
                <VehicleProperty title="Fuel Type">
                    {vehicle.fuelType}
                </VehicleProperty>
                <EquipmentList ids={vehicle.equipments || []} />
            </div>
            <div className={styles.controls}>
                <EditVehicle id={vehicle.id} />
                <RemoveVehicle id={vehicle.id} />
            </div>
        </div>
    );
};
