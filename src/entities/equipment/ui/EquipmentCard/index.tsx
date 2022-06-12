import { FC } from 'react';
import { useAppSelector } from 'app/config/hooks';
import { selectEquipmentById } from 'entities/equipment';
import { RemoveEquipment } from 'features/RemoveEquipment';

import styles from './equipment-card.module.scss';

interface Props {
    id: number;
    edit?: boolean;
}

export const EquipmentCard: FC<Props> = ({ id, edit }) => {
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
            {edit && <RemoveEquipment id={id} />}
        </div>
    );
};
