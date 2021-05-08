const DEFAULT_TIMEOUT = 7000;

export default (
    url: RequestInfo,
    options?: RequestInit | undefined,
    timeout = DEFAULT_TIMEOUT
): Promise<unknown> => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);
};
