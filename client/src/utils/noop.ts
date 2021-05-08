export const asyncNoop = async (): Promise<void> => {
    await new Promise(resolve => resolve(1));
};

