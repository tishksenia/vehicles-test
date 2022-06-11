import { useAppDispatch } from 'app/config/hooks';
import { Vehicle } from 'entities/vehicle';
import { addMultipleVehicles } from 'entities/vehicle';

import { ImportFile } from './ImportFile';

export const ImportVehicles = () => {
    const dispatch = useAppDispatch();

    const handleImport = (output: unknown[]) => {
        /*
            here and in the ImportEquipmentы component I assume that
            I don't need to validate objects inside the json files
            (for example, if they have required fields like id)
        */
        dispatch(addMultipleVehicles(output as Vehicle[]));
    };

    return <ImportFile title="Import Vehicles" handleImport={handleImport} />;
};
