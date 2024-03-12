import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import config from './config/development';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import morgan from 'morgan';
import { MessagesConfig } from '@/@shared/language/Messages';
import { Nodemailer } from './loader/InitializeEmail';
dotenv.config();
MessagesConfig.instance.setLanguage('pt-br');
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4000', // Substitua pela origem correta do cliente React
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

io.on('connection', (socket: Socket) => {
  socket.on('chat-message', (msg: string) => {
    io.emit('chat message', msg);
  });
});

server.listen(config.server.port, () => {
  Nodemailer.getInstance.init();
  console.log(`Server started in port ${config.server.port} ✅🎃🚀🇧🇷`);
  console.log(`http://localhost:${config.server.port}`);
  console.log(`process id: ${process.pid}`);
});
