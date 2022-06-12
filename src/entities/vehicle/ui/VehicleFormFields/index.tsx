import { FC } from 'react';
import { Controller, UseFormReturn, useFormState } from 'react-hook-form';

import { Vehicle } from 'entities/vehicle';
import { Input, Select } from 'shared';
import { fuelTypeOptions, statusOptions } from '../../config/selectOptions';
import { useAppSelector } from 'app/config/hooks';
import { selectCurrentId } from 'entities/vehicle/model/selectors';

interface Props {
    formInstance: UseFormReturn<Omit<Vehicle, 'id'>>;
}

export const VehicleFormFields: FC<Props> = ({ formInstance }) => {
    const { control, register } = formInstance;
    const { errors } = useFormState({ control });

    const currentId = useAppSelector(selectCurrentId);

    return (
        <>
            <Input label="ID" disabled value={`v${currentId + 1}`} />
            <Input
                label="Name"
                error={errors.name?.message}
                {...register('name')}
            />
            <Input
                label="Driver"
                error={errors.driver?.message}
                {...register('driver')}
            />
            <Controller
                render={({ field }) => (
                    <Select
                        label="Fuel Type"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        options={fuelTypeOptions}
                        error={errors.fuelType?.message}
                    />
                )}
                control={control}
                name="fuelType"
            />
            <Controller
                render={({ field }) => (
                    <Select
                        label="Status"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        options={statusOptions}
                        error={errors.status?.message}
                    />
                )}
                control={control}
                name="status"
            />
        </>
    );
};
