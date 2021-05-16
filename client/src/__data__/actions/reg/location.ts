import { Dispatch } from 'redux';

import * as types from '../../action-types';
import { fetchWithTimeout } from '../../../utils/fetch-with-timeout';

export default () => {
    return (dispatch: Dispatch): void => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => showPosition(position, dispatch),
                () => showPositionOff(dispatch)
            );
        } else {
            dispatch({
                type: types.GET_LOCATION_ERROR,
                payload: {}
            });
        }
    };
};

const showPositionOff = async (dispatch: Dispatch): Promise<void> => {
    try {
        const response = await fetchWithTimeout('http://ip-api.com/json/') as Response;

        if (!response.ok) {
            console.warn(`An error has occured: ${response.status}`);
            dispatch({
                type: types.GET_LOCATION_ERROR
            });
        }

        const json = await response.json();
        dispatch({
            type: types.GET_LOCATION_ILLEGAL,
            payload: {
                center: {
                    lat: json.lat,
                    lon: json.lon
                },
                lat: json.lat,
                lon: json.lon
            }
        });

    } catch (error) {
        console.warn(`An error has occured: ${error}`);
        dispatch({
            type: types.GET_LOCATION_ERROR
        });
    }
};

const showPosition = (position: GeolocationPosition, dispatch: Dispatch): void => {
    dispatch({
        type: types.GET_LOCATION_LEGAL,
        payload: {
            center: {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            },
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }
    });
};
