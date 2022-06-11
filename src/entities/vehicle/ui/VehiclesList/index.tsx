import { useAppSelector } from 'app/config/hooks';
import { selectVehicles } from '../../model/selectors';
import { VehicleCard } from '../VehicleCard';

import styles from './vehicles-list.module.scss';

export const VehiclesList = () => {
    const vehicles = useAppSelector(selectVehicles);

    return (
        <div className={styles['vehicles-list']}>
            {vehicles.map((vehicle) => (
                <VehicleCard vehicle={vehicle} key={vehicle.id} />
            ))}
        </div>
    );
};
