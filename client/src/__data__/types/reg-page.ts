import { Status } from '../constants';

export interface Genders {
    data: string[]
    status: Status
}

export interface KeyValueStructure {
    data: KeyValue[]
    status: Status
}

export interface UserLocation {
    lat: number
    lon: number
    center: {
        lat: number
        lon: number
    }
}

export interface RegPage {
    genders: Genders
    interests: KeyValueStructure
    orientations: KeyValueStructure
    location: UserLocation
}
