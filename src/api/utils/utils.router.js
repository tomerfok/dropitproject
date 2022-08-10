import { Router } from 'express';
const router = Router();
import { getAvailableTimeslots, resolveAddress } from './utils.controller';

// router.post('/', middlewarehandler, async(req,res,next) =>)

router.post('/timeslots', async(req, res, next) => {
    try {
        const timeslots = await getAvailableTimeslots(req.body.address);
        res.status(200).send({ message: "Available timeslots", timeslots });
    } catch (err) {
        next(err);
    }
});


router.post('/resolve-address', async(req, res, next) => {
    try {
        const resolvedAddress = await resolveAddress(req.body.searchTerm);
        res.status(200).send({ message: "Resolved Address", resolvedAddress });
    } catch (err) {
        next(err);
    }
});

export default router;