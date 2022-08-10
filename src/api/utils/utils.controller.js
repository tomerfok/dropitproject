import { getTimeslotsByAddress } from "./utils.store";
import axios from 'axios';
import { getApiKey } from '../../methods/methods';

const getAvailableTimeslots = async(address) => {
    try {
        const timeslots = await getTimeslotsByAddress(address.country);
        return timeslots;
    } catch (err) {
        throw (err);
    }
};

const resolveAddress = async(searchTerm) => {
    try {
        let API_KEY = await getApiKey();
        let config = {
            method: 'get',
            url: `https://api.geoapify.com/v1/geocode/search?text=${searchTerm}&lang=en&limit=5&format=json&apiKey=${API_KEY}`,
            headers: {}
        };

        const result = await axios(config);
        return result.data;
    } catch (err) {
        throw (err);
    }
};

export {
    getAvailableTimeslots,
    resolveAddress
};