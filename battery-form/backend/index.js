import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importation du middleware CORS
import { PORT, mongoDBURL } from './config.js';

// Importation des routes
import generalInformationRoutes from './routes/general informationroute.js';
import performanceDurabilityRoutes from './routes/performence and durabilityroute.js';
import designofcircularityroutes from './routes/design of circularityroute.js';
import supplyChainRoute from './routes/Supply chain due diligenceroute.js';
import BatteryMaterialRoute from './routes/Battery materials and compositionroute.js';

const app = express();

// Middleware pour parser le JSON dans les requêtes POST
app.use(express.json());

// Configurer CORS
app.use(cors({
  origin: 'http://localhost:3000', // Remplace cette URL par l'origine de ton frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Ajuste les méthodes HTTP selon tes besoins
  allowedHeaders: ['Content-Type', 'Authorization'] // Ajuste les en-têtes autorisés selon tes besoins
}));

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
app.use('/api', generalInformationRoutes);
app.use('/api', performanceDurabilityRoutes);
app.use('/api', designofcircularityroutes);
app.use('/api', supplyChainRoute);
app.use('/api', BatteryMaterialRoute);

export default app;
