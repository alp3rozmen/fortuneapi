import express from 'express';
import methods from './methods/index.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import sendMail from './helpers/mailer.js';
const app = express();

// CORS middleware
app.use(cors({ origin: "*"}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// JSON ve URL-encoded veri ayrıştırma middleware'leri
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
methods(app);

app.listen(3000, () => {
    console.log("DB URL:", process.env.DATABASE_URL_DEV);
    // sendMail('alp3rozmen@gmail.com', 'Sunucu Bilgisi' , 'Sunucu Başlatıldı FortuneTellerApi');
    console.log('Server is running on port 3000');
})

export default app;