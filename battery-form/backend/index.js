import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';

// Importation des routes
import generalInformationRoutes from './routes/general informationroute.js';
import performanceDurabilityRoutes from './routes/performence and durabilityroute.js';
import designofcircularityroutes from './routes/design of circularityroute.js';
import supplyChainRoute from './routes/Supply chain due diligenceroute.js';
import BatteryMaterialRoute from './routes/Battery materials and compositionroute.js';
import authRoutes from './routes/authRoutes.js'
import log from './middleware/logger.js';
import errHandler from './middleware/errHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import corsOptions from './config/corsOptions.js';

const app = express();

app.use(log.logger)
// Middleware pour parser le JSON dans les requêtes POST
app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome");
});

// Connexion à la base de données MongoDB
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to DB');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// Montage des routes
app.use(errHandler)
app.use('/auth',authRoutes)
app.use('/api', generalInformationRoutes);
app.use('/api', performanceDurabilityRoutes);
app.use('/api',designofcircularityroutes);
app.use('/api',supplyChainRoute);
app.use('/api',BatteryMaterialRoute)
export default app;
