import { VehiclesList } from 'entities/vehicle';
import { AddVehicle } from 'features/AddVehicle/ui';
import { ImportEquipments, ImportVehicles } from 'features/Import';
import { PageHeader } from 'widgets/PageHeader';

export const VehicleListPage = () => {
    return (
        <div>
            <PageHeader
                actions={
                    <>
                        <ImportVehicles />
                        <ImportEquipments />
                        <AddVehicle />
                    </>
                }>
                <h1>Vehicles</h1>
            </PageHeader>
            <VehiclesList />
        </div>
    );
};
