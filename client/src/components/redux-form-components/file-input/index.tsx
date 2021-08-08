import React, { ChangeEvent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Input = any;

const getBase64 = (file: File): Promise<unknown> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (): void => resolve(reader.result));
    reader.addEventListener('error', (error): void => reject(error));
});

interface RenderFileInputProps {
    input: Input
}

export const RenderFileInput = ({ input }: RenderFileInputProps): JSX.Element => {
    const onFileChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
