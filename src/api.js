import { mockData } from './mock-data';

export const extractLocations = (events) => {
    let extractLocations = events.map((event) => event.location);
    let locations = [...new Set(extractLocations)];
    return locations;
}

export const getEvents = async () => {
    return mockData;
}