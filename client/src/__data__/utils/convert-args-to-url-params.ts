interface HashTable {
    [key: string]: string;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const convertArgsToUrlParams = (...args: any[]): HashTable => {
    const params: HashTable = {};
    for (let i = 0; i < args.length; i++) {
        const key = Object.keys(args[i])[0];
        if (args[i][key] != null || args[i][key] != undefined) {
            params[key] = String(args[i][key]);
        }
    }
    return params;
};
