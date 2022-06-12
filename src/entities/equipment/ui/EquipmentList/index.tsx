import { FC } from 'react';
import { EquipmentCard } from '../EquipmentCard';

import styles from './equipment-list.module.scss';

interface Props {
    ids: number[];
}

export const EquipmentList: FC<Props> = ({ ids }) => {
    return ids.length ? (
        <div className={styles['equipment-list']}>
            <h3>Equipments:</h3>
            {ids.map((id) => (
                <EquipmentCard id={id} key={id} />
            ))}
        </div>
    ) : null;
};
