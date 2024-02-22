import { mocks } from "./mock/mock";
import camelize from 'camelize';

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('Not Found!');
        }
        resolve(mock); 
    })
}

const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return{
            ...restaurant,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now
        }
    });
    return camelize(mappedResults);
}

restaurantsRequest()
.then(restaurantsTransform)
.then((transformedResponse) => {
    console.log(transformedResponse); 
})
.catch((err) => {
    console.log(err)
})