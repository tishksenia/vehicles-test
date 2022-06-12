import { FC } from 'react';
import { toast } from 'react-toastify';

import { Button, TrashIcon, getCSSVariableValue } from 'shared';
import { useAppDispatch, useAppSelector } from 'app/config/hooks';
import { selectEquipmentById } from 'entities/equipment';
import { removeEquipment } from 'entities/vehicle';

interface Props {
    vehicleId: string;
    equipmentId: number;
}

export const RemoveEquipmentFromVehicle: FC<Props> = ({
    equipmentId,
    vehicleId,
}) => {
    const dispatch = useAppDispatch();

    const equipment = useAppSelector((state) =>
        selectEquipmentById(state, equipmentId)
    );

    const remove = (vehicleId: string) => {
        vehicleId && dispatch(removeEquipment({ equipmentId, vehicleId }));
        toast(
            `${
                equipment?.name || `Equipment with id ${equipmentId}`
            } is removed from equipment list of the ${vehicleId} vehicle`,
            { type: 'success' }
        );
    };

    return (
        <div>
            <Button
                icon
                outlined
                type="button"
                onClick={() => remove(vehicleId)}>
                <TrashIcon color={getCSSVariableValue('--accent-color')} />
            </Button>
        </div>
    );
};
