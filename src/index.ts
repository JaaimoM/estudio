import express, { Request, Response } from 'express';
import saints from './db';
import { Saint, RequestParams, ApiResponse, ErrorResponse } from './types';

const app = express();
const PORT = 3000;

// Ruta principal


app.get(' /', (req: Request, res: Response<any>) => {
  res.json({
    message: 'Hola caballero !'
  });
});

app.get('saints/', (req: Request, res: Response<ApiResponse<Saint[]>>) => {
  res.json({
    data: saints,
    success: true,
    message: 'Lista de todos los santos'
  });
});

app.get('/constelacion/:id', (req: Request<RequestParams>, res: Response<ApiResponse<Saint[]> | ErrorResponse>) => {
    const constelacion = req.params.id;
    const caballeros = saints.filter((c: Saint) => c.constelacion === constelacion);
    res.json({
        data: caballeros,
        success: true,
        message: `Santos de la constelación ${constelacion}`
    });
});

app.get('/cloth/:id', (req: Request<RequestParams>, res: Response<ApiResponse<Saint[]> | ErrorResponse>) => {
    const tipo = req.params.id;
    const caballeros = saints.filter((c: Saint) => c.cloth === tipo);
    res.json({
        data: caballeros,
        success: true,
        message: `Santos con cloth de ${tipo}`
    });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default app;

