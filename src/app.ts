
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { ProductRoutes } from './modules/products/product.route';
import { ProductRoutes2 } from './modules/orders/order.route';
const app: Application = express();

const Application = express()
// const port = 3000

//parsers
app.use(express.json());
app.use(cors())

app.use('/api/products', ProductRoutes)
app.use('/api/orders', ProductRoutes2)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app;