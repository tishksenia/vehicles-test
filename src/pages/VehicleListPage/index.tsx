import { VehiclesList } from 'entities/vehicle';
import { AddVehicle } from 'features/AddVehicle/ui';
import { ImportVehicles } from 'features/ImportVehicles';
import { PageHeader } from 'widgets/PageHeader';

export const VehicleListPage = () => {
    return (
        <div>
            <PageHeader
                actions={
                    <>
                        <ImportVehicles />
                        <AddVehicle />
                    </>
                }>
                <h1>Vehicles</h1>
            </PageHeader>
            <VehiclesList />
        </div>
    );
};
