import { dbConnection, ObjectId } from '../../db';
import { Delivery } from '../../models';

const createDelivery = async(user, timeslotId) => {
    try {
        const { collection, client } = await dbConnection();

        const timeslotResults = await collection.find({ timeslotId: timeslotId }, { "startTime": { "$exists": true } }).toArray();

        if (timeslotResults.length == 0)
            throw new Error("Can't create delivery with timeslotId given because it is nonexistent");

        const deliveriesResults = await collection.find({ timeslot: timeslotId }).toArray();

        if (deliveriesResults.length == 2)
            throw new Error("Maximum amount of deliveries reached per this timeslot");

        const delivery = new Delivery(user, "Booked", timeslotId, new Date(), new Date());
        await collection.insertOne(delivery);
        client.close();
    } catch (err) {
        throw (err);
    }
}

const getDaily = async() => {
    try {
        const { collection, client } = await dbConnection();

        const deliveriesResults = await collection.find({ "status": "Booked" }, {
            "createdAt": {
                $gte: new Date(new Date().setHours(0, 0, 0)),
                $lt: new Date(new Date().setHours(23, 59, 59))
            }
        }).toArray();
        client.close();

        return deliveriesResults;
    } catch (err) {
        throw (err);
    }
}

const getWeekly = async() => {
    try {
        const { collection, client } = await dbConnection();

        let curr = new Date;
        let first = curr.getDate() - curr.getDay();
        let last = first + 6;
        let firstday = new Date(curr.setDate(first));
        let lastday = new Date(curr.setDate(last));
        // get current week

        const deliveriesResults = await collection.find({ "status": "Booked" }, {
            "createdAt": {
                $gte: firstday,
                $lt: lastday
            }
        }).toArray();
        client.close();

        return deliveriesResults;
    } catch (err) {
        throw (err);
    }
}

const changeStatus = async(deliveryId, status) => {
    try {
        const { collection, client } = await dbConnection();

        await collection.updateOne({ "_id": ObjectId(deliveryId) }, { $set: { "status": status } });
        client.close();
    } catch (err) {
        throw (err);
    }
}

export {
    createDelivery,
    getDaily,
    getWeekly,
    changeStatus
}