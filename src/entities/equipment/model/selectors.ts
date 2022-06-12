import { RootState } from 'app/config/store';
import { createSelector } from 'reselect';

const selectEquipments = (state: RootState) => state.equipments;

const selectEquipmentById = createSelector(
    [selectEquipments, (_, id) => id],
    (equipments, id) => equipments.find((item) => item.id === id)
);

export { selectEquipmentById, selectEquipments };
