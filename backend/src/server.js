
---

### File 7 — `backend/src/server.js`  

```js
import app from './app.js';
import connectDB from './config/db.js';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { initSocket } from './config/socket.js';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Create HTTP server
const server = createServer(app);

// Initialize Socket.io
const io = new SocketServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
initSocket(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

