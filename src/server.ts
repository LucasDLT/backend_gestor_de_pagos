import express from 'express';
import cors from 'cors';
import { PORT } from './env';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get('/', (_req, res) => {
  res.send('Servidor funcionando ✅');
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app;
