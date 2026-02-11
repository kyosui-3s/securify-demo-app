const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: '3sec-corp-api',
    version: '1.0.0',
    status: 'running',
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Tanaka', role: 'admin' },
    { id: 2, name: 'Suzuki', role: 'user' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
