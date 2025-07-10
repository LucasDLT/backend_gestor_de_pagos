import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/payment.routes';
//anotacion para mas adelante: paymentRoutes es un alias que se define en este momento para traer todo el routes de payment en el controlador. Al no usar una estructura de carpetas, se puede hacer de esta manera. Antes lo que haciamos era una carpeta para cada ruta y dentro un archivo ts que exportaba la ruta. Ahora desde la ruta misma traemos todo bajo un alias. 
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payment',  paymentRoutes )

export default app;