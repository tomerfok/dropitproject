import { Router } from 'express';
const router = Router();
import { bookDelivery, getDailyDeliveries, getWeeklyDeliveries, completeDelivery, cancelDelivery } from './deliveries.controller';

router.post('/', async(req, res, next) => {
    try {
        await bookDelivery(req.body);
        res.status(200).send({ message: "Booked Delivery", delivery: req.body });
    } catch (err) {
        next(err);
    }
});

router.get('/daily', async(req, res, next) => {
    try {
        const dailyDeliveries = await getDailyDeliveries();
        res.status(200).send({ message: "Daily deliveries:", dailyDeliveries });
    } catch (err) {
        next(err);
    }
});

router.get('/weekly', async(req, res, next) => {
    try {
        const weeklyDeliveries = await getWeeklyDeliveries();
        res.status(200).send({ message: "Weekly deliveries:", weeklyDeliveries });
    } catch (err) {
        next(err);
    }
});

router.post('/:delivery_id/complete', async(req, res, next) => {
    try {
        const deliveryId = req.params.delivery_id;
        await completeDelivery(deliveryId);
        res.status(201).send({ message: "Delivery Completed", deliveryId });
    } catch (err) {
        next(err);
    }
});

router.delete('/:delivery_id', async(req, res, next) => {
    try {
        const deliveryId = req.params.delivery_id;
        await cancelDelivery(deliveryId);
        res.status(200).send({ message: "Delivery canceled", deliveryId });
    } catch (err) {
        next(err);
    }
});

export default router;