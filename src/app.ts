
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { ProductRoutes } from './modules/products/product.route';
import { OrderRoutes } from './modules/orders/order.route';
const app: Application = express();

const Application = express()
// const port = 3000

//parsers
app.use(express.json());
app.use(cors())

app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


app.use((req: Request, res: Response) => {
  res.status(404).json({
      success: false,
      message: 'Route not found'
  });
});



export default app;