import { FC, memo, ReactNode, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'shared';
import { FormContainer } from 'widgets';
import { formDefaultValues, formSchema } from 'entities/vehicle/config';
import { FormValues, VehicleFormContext } from 'entities/vehicle/model';
import { EquipmentForm } from 'entities/equipment';

import { VehicleFormFields } from '../VehicleFormFields';
import { VehicleFormModal } from '../VehicleFormModal';

import styles from './vehicle-form.module.scss';

interface Props {
    defaultValues?: FormValues;
    onSubmit: SubmitHandler<FormValues>;
    uiOptions: {
        formTitle: ReactNode;
        trigger: ReactNode;
    };
}

export const VehicleForm: FC<Props> = memo(
    ({
        defaultValues = formDefaultValues,
        onSubmit,
        uiOptions: { trigger, formTitle },
    }) => {
        const [open, setOpen] = useState<boolean>();
        const formInstance = useForm({
            defaultValues,
            resolver: yupResolver(formSchema),
        });
        const { handleSubmit, reset } = formInstance;

        const submit = (values: FormValues) => {
            onSubmit(values);
            setOpen(false);
            reset(defaultValues);
        };

        return (
            <VehicleFormContext.Provider value={formInstance}>
                {open && (
                    <VehicleFormModal modalState={{ open, setOpen }}>
                        <FormContainer
                            actions={<Button>Submit</Button>}
                            onSubmit={handleSubmit(submit)}>
                            <h1>{formTitle}</h1>
                            <VehicleFormFields />
                            <EquipmentForm />
                        </FormContainer>
                    </VehicleFormModal>
                )}
                <span
                    role="button"
                    onClick={() => setOpen(true)}
                    className={styles.trigger}>
                    {trigger}
                </span>
            </VehicleFormContext.Provider>
        );
    }
);
