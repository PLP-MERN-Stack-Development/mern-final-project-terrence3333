let io;

export const initSocket = (serverIo) => {
  io = serverIo;

  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
    });

    socket.on('taskUpdated', (data) => {
      io.to(data.projectId).emit('taskUpdated', data);
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

export const getIo = () => {
  if (!io) throw new Error('Socket.io not initialized!');
  return io;
};

