import { VehiclesList } from 'entities/vehicle';
import { ImportVehicles } from 'features/ImportVehicles/ui';
import { PageHeader } from 'widgets/PageHeader';

export const VehicleListPage = () => {
    return (
        <div>
            <PageHeader
                actions={
                    <>
                        <ImportVehicles />
                    </>
                }>
                <h1>Vehicles</h1>
            </PageHeader>
            <VehiclesList />
        </div>
    );
};
