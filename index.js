const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { sequelize, User } = require('./models/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', async (req, res) => {
    console.log("in signup");
    const { email, username, password } = req.body;
    try {
      const user = await User.create({ email, username, password });
      res.status(201).send('User created');
    } catch (error) {
      res.status(400).send('Error creating user');
    }
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (!user) return res.status(400).send('Invalid email or password');
    res.status(200).send('Login successful');
  });

  sequelize.sync({ alter: true }).then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Unable to sync database:', error);
  });