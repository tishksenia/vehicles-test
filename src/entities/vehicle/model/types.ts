type FuelType = 'LNG' | 'Diesel' | 'CNG' | 'Electrical';

type VehicleStatus = 'active' | 'inactive';

interface Vehicle {
    id: string;
    name: string;
    driver: string;
    fuelType: FuelType;
    status: VehicleStatus;
    equipments?: number[];
}

export type { FuelType, Vehicle, VehicleStatus };
