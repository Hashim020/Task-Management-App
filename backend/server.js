const http = require('http');
const socketIO = require('socket.io');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');


const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db')
connectDB()

const userRoute= require('./routes/userRoutes')



const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const server = http.createServer(app);
const io = socketIO(server);
app.use(helmet());

app.use(userRoute)



io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('taskUpdated', (data) => {
        io.emit('taskUpdateNotification', data);
    });
    socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(process.env.PORT || 5000, () => console.log(`Server running @ http://localhost:5000`));
