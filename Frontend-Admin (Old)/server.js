import jsonServer from 'json-server';
import { Routes } from 'react-router-dom';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom Login Route
server.post('/login', (req, res) => {
  const { username, userPassword } = req.body;
  const admins = router.db.get('admins').value(); // Get users from db.json

  const admin = admins.find(u => u.user_name === username && u.password === userPassword);

  if (admin) {
    res.status(200).json({ message: 'Login successful', admin });
  } else {
    res.status(400).json({ message: 'Invalid credentials or please sign up' });
  }
});
// Users Routes

// Use default router (db.json)
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
