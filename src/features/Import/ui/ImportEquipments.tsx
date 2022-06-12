import { useAppDispatch } from 'app/config/hooks';
import { addMultipleEquipments, Equipment } from 'entities/equipment';
import { toast } from 'react-toastify';

import { ImportFile } from './ImportFile';

export const ImportEquipments = () => {
    const dispatch = useAppDispatch();

    const handleImport = (output: unknown[]) => {
        /*
            here and in the ImportEquipments component I assume that
            I don't need to validate objects inside the json files
            (for example, if they have required fields like id)
        */
        dispatch(addMultipleEquipments(output as Equipment[]));
        toast('Equipments were imported', { type: 'success' });
    };

    return <ImportFile title="Import Equipments" handleImport={handleImport} />;
};
