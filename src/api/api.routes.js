import { Router } from 'express';
// import { preLogApi } from './middlewares';
import deliveriesRouter from './deliveries/deliveries.router';
import utilsRouter from './utils/utils.router';

const router = Router();
// router.use(preLogApi);

router.use('/deliveries', deliveriesRouter);
router.use('/', utilsRouter);

// router.use(clientErrorHandler);

export default router;