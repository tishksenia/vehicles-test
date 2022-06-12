import { FC } from 'react';
import { EquipmentCard } from '../EquipmentCard';

import styles from './equipment-list.module.scss';

interface Props {
    ids: number[];
    edit?: boolean;
    vehicleId?: string;
}

export const EquipmentList: FC<Props> = ({ ids, edit, vehicleId }) => {
    const editProps = { edit, vehicleId };

    return ids.length ? (
        <div className={styles['equipment-list']}>
            <h3>Equipments:</h3>
            {ids.map((id) => (
                <EquipmentCard {...editProps} id={id} key={id} />
            ))}
        </div>
    ) : null;
};
