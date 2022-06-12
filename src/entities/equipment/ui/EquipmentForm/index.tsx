import { useAppSelector } from 'app/config/hooks';
import { selectVehicleById } from 'entities/vehicle';
import React, { FC } from 'react';
import { EquipmentList } from '../EquipmentList';

interface Props {
    vehicleId?: string;
}

export const EquipmentForm: FC<Props> = ({ vehicleId }) => {
    const vehicle = useAppSelector((state) =>
        vehicleId ? selectVehicleById(state, vehicleId) : undefined
    );

    return (
        <div>
            {vehicle && (
                <EquipmentList
                    ids={vehicle.equipments || []}
                    vehicleId={vehicle?.id}
                    edit
                />
            )}
        </div>
    );
};
