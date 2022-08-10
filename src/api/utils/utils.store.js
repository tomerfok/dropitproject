import { dbConnection } from '../../db';

const getTimeslotsByAddress = async(country) => {
    try {
        const { collection, client } = await dbConnection();

        const timeslotsResults = await collection.find({ supportedAddresses: { $in: [country] } }).toArray();
        client.close();

        return timeslotsResults;
    } catch (err) {
        throw (err);
    }
}

export {
    getTimeslotsByAddress
}