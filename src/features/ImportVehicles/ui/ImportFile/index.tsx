import { ChangeEvent, FC, MouseEventHandler, useRef } from 'react';

import { Button } from 'shared';
import { readJsonFile } from 'features/ImportVehicles/lib/readJsonFile';

import styles from './import-file.module.scss';

interface Props {
    title?: string;
    handleImport: (output: unknown[]) => void;
}

export const ImportFile: FC<Props> = ({ title = 'Import', handleImport }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileUploaded = event.target.files[0];
            readJsonFile(fileUploaded)
                .then((output) => output && handleImport(output))
                .catch((error) => {
                    // TODO: handle error
                    console.error(error);
                });
        }
    };
    const handleClick: MouseEventHandler<HTMLButtonElement> = () =>
        fileInputRef?.current?.click();

    return (
        <>
            <input
                type="file"
                accept=".json"
                className={styles['file-input']}
                ref={fileInputRef}
                onChange={handleChange}
            />
            <Button onClick={handleClick}>{title}</Button>
        </>
    );
};
