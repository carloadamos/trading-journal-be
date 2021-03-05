import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { messagesPage, addMessage } from '../controllers/messages';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
