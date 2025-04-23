// server's router center is here
const express = require('express');
const cors = require('cors');
const app = express();
const albumsRouter = require('./routes/albums'); 
const eventsRouter = require('./routes/events')
  // ✅ 引入路由模組

const port = 5000;
app.use(cors());
app.use(express.json());

// ✅ 使用路由：加上正確的前綴 "/api/albums"
app.use('/api/albums', albumsRouter);
app.use('/api/events', eventsRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})