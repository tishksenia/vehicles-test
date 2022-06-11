export const readJsonFile = async (file: File): Promise<unknown[] | null> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = (fileLoadedEvent) => {
            const textFromFileLoaded = fileLoadedEvent?.target?.result;
            if (typeof textFromFileLoaded === 'string') {
                // assuming that file validation is not needed
                // and there will be a valid json inside
                resolve(JSON.parse(textFromFileLoaded));
            } else {
                throw new Error('Unexpected file type');
            }
        };
        fileReader.onerror = () => {
            reject(null);
        };
        fileReader.readAsText(file);
    });
};
