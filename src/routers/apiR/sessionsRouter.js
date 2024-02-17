import { Router } from 'express'
import { postSessionController, getCurrentSessionController, deleteCurrentSessionController, createSessionController } from '../../controllers/apiR.controllers/sessionsRouter.controller.js'

export const sessionsRouter = Router()

sessionsRouter.post('/login', postSessionController);
sessionsRouter.get('/current', getCurrentSessionController);
sessionsRouter.delete('/current', deleteCurrentSessionController);
sessionsRouter.post('/create', createSessionController);

