import express from 'express';

import mealRoutes from './routes/meal.routes';
import orderRoutes from './routes/order.routes';
import menuRoutes from './routes/menu.route';

const app = express();

// Parse request body
app.use(express.json());
const PORT = 9000;

app.get('/', (req, res) => {
  return res.send('Get to the chopper! NOW!!!');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(process.env.PORT || 9000, () => {
  console.log('Running on Port 9000');
  });

export default app;