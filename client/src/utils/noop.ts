export const asyncNoop = async (..._args: unknown[]): Promise<void> => {
    void _args;
    await new Promise((resolve) => resolve(1));
};

