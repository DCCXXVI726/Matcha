import React, { ChangeEvent } from 'react';

const getBase64 = (file: File): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (): void => resolve(reader.result);
        reader.onerror = (error): void => reject(error);
    });
};

interface RenderFileInputProps {
    // eslint-disable-next-line
    input: any
}

export const RenderFileInput = ({
    input
}: RenderFileInputProps): JSX.Element => {

    const onFileChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        // eslint-disable-next-line
        // @ts-ignore
        const targetFile: File | undefined = e.target.files[0];
        if (targetFile) {
            const val = await getBase64(targetFile);
            input.onChange(val);
        } else {
            input.onChange(null);
        }
    };

    return (
        <input
            type='file'
            onChange={onFileChange}
            accept='.jpg, .png, .jpeg'
        />
    );
};
