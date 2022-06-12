import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'app/config/hooks';
import { Button, Select } from 'shared';
import { selectEquipments } from 'entities/equipment';
import { attachEquipment } from 'entities/vehicle';

interface Props {
    vehicleId?: string;
}

export const AttachEquipment: FC<Props> = ({ vehicleId }) => {
    const [equipmentId, setEquipmentId] = useState<number>();

    const equipments = useAppSelector(selectEquipments);
    const equipmentOptions = equipments.map(({ id, name }) => ({
        value: id,
        text: name,
    }));

    const dispatch = useDispatch();

    const add = () => {
        vehicleId &&
            equipmentId &&
            dispatch(attachEquipment({ vehicleId, equipmentId: equipmentId }));
    };

    return vehicleId ? (
        <div>
            <Select
                label="Attach Equipment"
                options={equipmentOptions}
                value={equipmentId}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                    setEquipmentId(Number(event.target.value));
                }}
            />
            <Button type="button" disabled={!equipmentId} onClick={add}>
                Add
            </Button>
        </div>
    ) : null;
};
