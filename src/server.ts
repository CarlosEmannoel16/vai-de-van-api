import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import config from '@/config/developmet'
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {  cors: {
  origin: 'http://localhost:3000', // Substitua pela origem correta do cliente React
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
},});

io
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



io.on('connection', (socket: Socket) => {
  socket.on('chat-message', (msg: string) => {
    console.log('Mensagem recebida:', msg);
    io.emit('chat message', msg); 
  });

});


server.listen(config.server.port, () => {
  console.log('Server started :D emoji');
});
