import express from 'express';
import bodyParser from 'body-parser';
import { createContact } from './controllers/contactController';
import { createSms, getSms, deleteSms } from './controllers/smsController';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = parseInt(process.env.PORT, 10) || 8080;

app.post('/api/v1/contact/create', createContact)

// create a new SMS
app.post('/api/v1/sms/create', createSms);

// Retrieve SMS
app.get('/api/v1/sms/:contactId/receiver/:receiverId', getSms);

// delete sms
app.delete('/api/v1/contact/delete/:contactId', deleteSms);

app.listen(port);

export default app;
