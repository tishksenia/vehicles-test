import { VehiclesList } from 'entities/vehicle';
import { ImportVehicles } from 'features/ImportVehicles/ui';

export const VehicleListPage = () => {
    return (
        <div>
            <h1>Vehicles</h1>
            <ImportVehicles />
            <VehiclesList />
        </div>
    );
};
