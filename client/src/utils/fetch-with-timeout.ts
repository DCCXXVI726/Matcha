const DEFAULT_TIMEOUT = 7000;

export const fetchWithTimeout = (
    url: RequestInfo,
    options?: RequestInit | undefined,
    timeout = DEFAULT_TIMEOUT
): Response | Promise<unknown> => Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), timeout)
    )
]);
