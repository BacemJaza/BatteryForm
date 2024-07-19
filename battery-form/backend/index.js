// index.js

import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';

// Importation des routes
import generalInformationRoutes from './routes/generalInformationRoutes.js';
import designCircularityRoutes from './routes/designCircularityRoutes.js';
import performanceDurabilityRoutes from './routes/performanceDurabilityRoutes.js';
import supplyChainFormRoutes from './routes/supplyChainFormRoutes.js';

const app = express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome")
})

// Connexion à la base de données MongoDB
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to DB');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})

// Montage des routes
app.use('/api', generalInformationRoutes);
app.use('/api', designCircularityRoutes);
app.use('/api', performanceDurabilityRoutes);
app.use('/api', supplyChainFormRoutes);


