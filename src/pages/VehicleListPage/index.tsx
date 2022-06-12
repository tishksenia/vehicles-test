import { VehiclesList } from 'entities/vehicle';
import { AddVehicle } from 'features/AddVehicle';
import { ImportVehicles } from 'features/ImportVehicles/ui';
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
