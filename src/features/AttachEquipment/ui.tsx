import { ChangeEvent, FC, useContext, useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';

import { useAppSelector } from 'app/config/hooks';
import { Button, Select } from 'shared';
import { selectEquipments } from 'entities/equipment';
import { VehicleFormContext } from 'entities/vehicle';
import { FormValues } from 'entities/vehicle/model';

import styles from './attach-equipment.module.scss';

export const AttachEquipment: FC = () => {
    const [equipmentId, setEquipmentId] = useState<number | ''>('');
    const equipments = useAppSelector(selectEquipments);

    const { setValue, control } = useContext(
        VehicleFormContext
    ) as UseFormReturn<FormValues>;

    const selectedEquipments = useWatch({ control, name: 'equipments' });

    const equipmentOptions = equipments
        .map(({ id, name }) => ({
            value: id,
            text: name,
        }))
        .filter(({ value }) => !selectedEquipments?.includes(value));

    const add = () => {
        equipmentId &&
            setValue('equipments', [
                ...(selectedEquipments || []),
                equipmentId,
            ]);
        setEquipmentId('');
    };

    return (
        <div className={styles['attach-equipment']}>
            {!equipments.length && (
                <span className={styles['warning']}>
                    No equipments are available
                </span>
            )}
            {Boolean(equipments.length) && (
                <div className={styles['add-select']}>
                    <Select
                        fluid
                        value={equipmentId}
                        label="Equipment"
                        options={equipmentOptions}
                        disabled={!equipmentOptions.length}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                            setEquipmentId(Number(event.target.value));
                        }}
                    />
                    <Button type="button" disabled={!equipmentId} onClick={add}>
                        Add
                    </Button>
                </div>
            )}
        </div>
    );
};
