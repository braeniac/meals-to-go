import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = location[searchTerm];
        if (!locationMock) {
            reject('Not found!');
        }
        return resolve(locationMock); 
    })
}

export const locationTransform = (result) => {
    //destructure the geometry and default it to an object from locations (result).
    const { geometry = { } } = camelize(result.results)[0];
    const { lat, lng } = geometry.location; 
    return { lat, lng }
}


