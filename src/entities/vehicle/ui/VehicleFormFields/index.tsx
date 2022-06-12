import { useContext } from 'react';
import { Controller, UseFormReturn, useFormState } from 'react-hook-form';

import { Input, Select } from 'shared';
import { fuelTypeOptions, statusOptions } from '../../config/selectOptions';
import { useAppSelector } from 'app/config/hooks';
import { selectCurrentId } from 'entities/vehicle/model/selectors';
import { FormValues, VehicleFormContext } from 'entities/vehicle/model';

export const VehicleFormFields = () => {
    const formInstance = useContext(VehicleFormContext);
    const { control, register, getValues } =
        formInstance as UseFormReturn<FormValues>;
    const { errors } = useFormState({ control });

    const currentId = useAppSelector(selectCurrentId);

    const id = getValues('id');

    return (
        <>
            <Input
                label="ID"
                disabled
                value={id || `v${currentId + 1}`}
                fluid
            />
            <Input
                label="Name"
                error={errors.name?.message}
                fluid
                {...register('name')}
            />
            <Input
                label="Driver"
                error={errors.driver?.message}
                fluid
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
                        fluid
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
                        fluid
                    />
                )}
                control={control}
                name="status"
            />
        </>
    );
};
