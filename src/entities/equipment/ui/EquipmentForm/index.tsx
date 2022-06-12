import { FC, useContext } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';

import { FormValues, VehicleFormContext } from 'entities/vehicle/model';
import { AttachEquipment } from 'features/AttachEquipment';
import { EquipmentCard } from '../EquipmentCard';

import styles from './equipment-form.module.scss';

export const EquipmentForm: FC = () => {
    const { control } = useContext(
        VehicleFormContext
    ) as UseFormReturn<FormValues>;

    const equipments = useWatch({ name: 'equipments', control });

    return (
        <div className={styles['equipment-form']}>
            <h3>Equipments:</h3>
            {equipments?.map((id) => (
                <EquipmentCard id={id} key={id} edit />
            ))}
            <AttachEquipment />
        </div>
    );
};
