import express, { urlencoded } from 'express';
import { createServer } from 'node:http';

import { Server } from 'socket.io';

import mongoose from 'mongoose';
import { connectToSocket } from './controllers/socketManager.js';

import cors from 'cors';
import userRoutes from './routes/users.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));

app.use('/api/v1/users', userRoutes);
// make Version routes for "if version changes so for it to handle"
// app.use('/api/v2/users', newUserRoutes); 

const start = async () => {
  app.set('mongo_user');
  const connectionDb = await mongoose.connect(
    'mongodb+srv://shifastudyit:M2P5zNKbJ1NLQfFU@clustercall.wv07bzc.mongodb.net/',
  );

  console.log(`MONGO connected DB Host: ${connectionDb.connection.host}`);
  server.listen(app.get('port'), () => {
    console.log('Listing at port 8000');
  });
};

start();
