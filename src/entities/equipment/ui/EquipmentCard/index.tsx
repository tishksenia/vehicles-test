import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/config/hooks';
import { selectEquipmentById } from 'entities/equipment';
import { Button, getCSSVariableValue, TrashIcon } from 'shared';
import { removeEquipment } from 'entities/vehicle';

import styles from './equipment-card.module.scss';
import { toast } from 'react-toastify';
import { RemoveEquipmentFromVehicle } from 'features/RemoveEquipmentFromVehicle';

interface Props {
    id: number;
    edit?: boolean;
    vehicleId?: string;
}

export const EquipmentCard: FC<Props> = ({ id, edit, vehicleId }) => {
    const equipment = useAppSelector((state) => selectEquipmentById(state, id));

    // assumption: if there is no vehicle with such id in store, I should let the user know
    return (
        <div className={styles['equipment-card']}>
            {equipment?.name}
            {!equipment && (
                <span>
                    Unknown (<b>id:</b> {id})
                </span>
            )}

            {edit && vehicleId && (
                <RemoveEquipmentFromVehicle
                    equipmentId={id}
                    vehicleId={vehicleId}
                />
            )}
        </div>
    );
};
