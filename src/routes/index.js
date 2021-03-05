import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { messagesPage } from '../controllers/messages';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));
indexRouter.get('/messages', messagesPage);

export default indexRouter;
