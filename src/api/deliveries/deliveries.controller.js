import { createDelivery, getDaily, getWeekly, changeStatus } from "./deliveries.store";

const bookDelivery = async({ user, timeslotId }) => {
    try {
        await createDelivery(user, timeslotId)
    } catch (err) {
        throw (err);
    }
};

const getDailyDeliveries = async() => {
    try {
        const dailyDeliveries = await getDaily();
        return dailyDeliveries;
    } catch (err) {
        throw (err);
    }
};

const getWeeklyDeliveries = async() => {
    try {
        const weeklyDeliveries = await getWeekly();
        return weeklyDeliveries;
    } catch (err) {
        throw (err);
    }
};

const completeDelivery = async(deliveryId) => {
    try {
        await changeStatus(deliveryId, "Completed");
    } catch (err) {
        throw (err);
    }
};

const cancelDelivery = async(deliveryId) => {
    try {
        await changeStatus(deliveryId, "Cancaled");
    } catch (err) {
        throw (err);
    }
};

export {
    bookDelivery,
    getDailyDeliveries,
    getWeeklyDeliveries,
    completeDelivery,
    cancelDelivery
};