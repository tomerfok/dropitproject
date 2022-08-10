import { dbConnection } from "../db";
import { Timeslot } from "../models";

const createTimeslotsMock = async() => {
    try {
        const { collection, client } = await dbConnection();

        const timeslotResults = await collection.find({ "timeslotId": { "$exists": true } }).toArray();
        if (timeslotResults.length > 0)
            return timeslotResults;

        let startTime = new Date();
        let endTime = new Date();
        endTime.setDate(startTime.getDate() - 2);
        let supportedAddresses = ['Israel', 'United States'];

        const timeslotOne = new Timeslot(1, startTime, endTime, supportedAddresses);
        await collection.insertOne(timeslotOne);

        startTime.setDate(startTime.getDate() - 4);
        endTime.setDate(endTime.getDate() - 4);
        supportedAddresses = ['Canada'];

        const timeslotTwo = new Timeslot(2, startTime, endTime, supportedAddresses);
        await collection.insertOne(timeslotTwo);

        client.close();
        return "Timeslots mocks created succefully";
    } catch (err) {
        console.log(err)
    }
};


const getApiKey = async() => {
    try {
        //Function to get valid api key
        return "66ad7fb6af86420a927c8bc111c3f178";
    } catch (err) {
        console.log(err)
    }
};

export { createTimeslotsMock, getApiKey };