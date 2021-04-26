import { convertArgsToUrlParams } from './convert-args-to-url-params';

test('Args without null/undefined', () => {
    const nbr = 1;
    const str = 'string';
    expect(convertArgsToUrlParams({ nbr }, { str })).toEqual({ nbr: '1', str: 'string' });
});

test('Args with null/undefined', () => {
    const nbr = 1;
    const str = 'string';
    const empty = null;
    expect(convertArgsToUrlParams({ nbr }, { str }, { empty })).toEqual({ nbr: '1', str: 'string' });
});

test('Empty', () => {
    expect(convertArgsToUrlParams()).toEqual({});
});

test('Invalid args', () => {
    expect(convertArgsToUrlParams({ test: null }, { test: undefined }, { test: void 0 })).toEqual({});
});
