import { Router } from 'express';
import { HelloController } from '../controllers/helloController';

const router = Router();
const helloController = new HelloController();

export function setRoutes(app: Router) {
    app.get('/hello', helloController.getHello.bind(helloController));
}

export default router;